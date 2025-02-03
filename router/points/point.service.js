import prisma from "../../prismaClient.js";

const fetchStudyPoints = async (studyId) => {
  try {
    const study = await prisma.study.findUnique({
      where: { id: studyId },
      select: { points: true }, // Only select the points field
    });

    if (!study) {
      throw new Error("Study not found.");
    }

    return study.points;
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch study points.");
  }
};

const pointService = {
  fetchStudyPoints,
};
export default pointService;
