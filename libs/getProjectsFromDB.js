import client from "@/sanity";

export const getProjectsFromDB = async () => {
  const res = await client.fetch(`
  *[_type=="project"] {
    ...,
technologies[]->{
...,
}
  }`);
  const newDataStructure = {
    firstProject: res[0],
    secondAndThirdProjects: [res[1], res[2]],
    remainingProjects: res.slice(3), // Slice the array from index 3 to the end
  };
  return newDataStructure;
};
