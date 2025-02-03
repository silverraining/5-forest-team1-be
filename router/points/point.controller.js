import pointService from "./point.service.js";

export const getStudyPoints = async (req, res) => {
  const { studyId } = req.params;
  console.log("studyId:", studyId); //콘솔 출력 테스트
  console.log("req.params:", req.params);
  try {
    const pointsData = await pointService.fetchStudyPoints(studyId);
    res.status(200).send({ studyId, pointsData });
  } catch (err) {
    console.error(err);
    res.status(500).send("포인트 데이터를 가져오는 중 오류가 발생했습니다.");
  }
};
