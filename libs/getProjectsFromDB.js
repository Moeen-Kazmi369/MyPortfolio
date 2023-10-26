import { database } from "@/appwrite"

export const getProjectsFromDB=async()=>{
    const data=await database.listDocuments(
        "653a7a4693d40e8f083d",
        "653a7a53c1c8ab3c6bde",
    )
    const originalData=data.documents
    const newDataStructure = {
        firstProject: originalData[0],
        secondAndThirdProjects: [originalData[1], originalData[2]],
        remainingProjects: originalData.slice(3) // Slice the array from index 3 to the end
      };
      return newDataStructure
}