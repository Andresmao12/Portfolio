import { Request, Response } from "express";

import { analyzeIdea } from "../services/analyzer.service";

export const analyzeProject = async (req: Request, res: Response) => {

    try {

        const { idea, language } = req.body;

        if (!idea) {
            return res.status(400).json({
                status: "error",
                message: "Idea is required"
            });
        }

        const result = await analyzeIdea({ idea, language });

        return res.status(200).json({
            status: "success",
            message: "Analysis completed",
            data: result
        });

    } catch (error) {

        return res.status(500).json({
            status: "error",
            message: String(error)
        });
    }
};