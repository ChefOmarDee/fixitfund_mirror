import { connectToDatabase } from "../connection/connection.js";
import { Project } from "../models/project.js";

export async function getallprojectdetails() {
    await connectToDatabase();

    try {
        // Find the project by projectId
        const projects = await Project.find();
        const formattedProjects = projects.map(project => ({
            ...project.toObject(),
            cost: project.cost.toString(), 
            donated: project.donated.toString()  
        }));
        return formattedProjects;
    } catch (error) {
        console.error("Error in getallprojectdetails:", error);
        return { status: 500, json: { error: 'Internal server error' } };
    }
}