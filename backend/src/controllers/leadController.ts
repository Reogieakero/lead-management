import type { Request, Response } from 'express';
import Lead from '../models/Lead.js';

export const getLeads = async (req: Request, res: Response): Promise<void> => {
  try {
    const { status, source, search, sort, page = '1', limit = '10' } = req.query;
    const queryConditions: any = {};

    if (status) queryConditions.status = status;
    if (source) queryConditions.source = source;
    if (search) {
      queryConditions.$or = [
        { name: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } }
      ];
    }

    const sortOption: any = {};
    if (sort === 'oldest') {
      sortOption.createdAt = 1;
    } else {
      sortOption.createdAt = -1; // Default: 'latest'
    }

    const pageNum = parseInt(page as string, 10);
    const limitNum = parseInt(limit as string, 10);
    const skipNum = (pageNum - 1) * limitNum;

    const totalRecords = await Lead.countDocuments(queryConditions);
    const leads = await Lead.find(queryConditions)
      .sort(sortOption)
      .skip(skipNum)
      .limit(limitNum);

    res.json({
      data: leads,
      metadata: {
        totalRecords,
        currentPage: pageNum,
        totalPages: Math.ceil(totalRecords / limitNum),
        limit: limitNum
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving leads.', error });
  }
};

export const createLead = async (req: Request, res: Response): Promise<void> => {
  try {
    const newLead = new Lead(req.body);
    await newLead.save();
    res.status(201).json(newLead);
  } catch (error) {
    res.status(400).json({ message: 'Error creating lead.', error });
  }
};

export const updateLead = async (req: Request, res: Response): Promise<void> => {
  try {
    const updatedLead = await Lead.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedLead) {
      res.status(404).json({ message: 'Lead not found.' });
      return;
    }
    res.json(updatedLead);
  } catch (error) {
    res.status(400).json({ message: 'Error updating lead.', error });
  }
};

export const deleteLead = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedLead = await Lead.findByIdAndDelete(req.params.id);
    if (!deletedLead) {
      res.status(404).json({ message: 'Lead not found.' });
      return;
    }
    res.json({ message: 'Lead permanently removed.' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting lead.', error });
  }
};

export const exportLeadsCSV = async (req: Request, res: Response): Promise<void> => {
  try {
    const leads = await Lead.find({});
    let csvContent = 'Name,Email,Status,Source,CreatedAt\n';
    
    leads.forEach(lead => {
      csvContent += `"${lead.name}","${lead.email}","${lead.status}","${lead.source}",${lead.createdAt}\n`;
    });

    res.setHeader('Content-Type', 'text/csv');
    res.setHeader('Content-Disposition', 'attachment; filename=leads_export.csv');
    res.status(200).send(csvContent);
  } catch (error) {
    res.status(500).json({ message: 'Error exporting CSV archive.', error });
  }
};