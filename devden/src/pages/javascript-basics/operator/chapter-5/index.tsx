import ChapterWithChallenge from "@/pages/ChaptersComponents/ChapterWithChallenge"

const Chapter5 = () => {
  const initialInput = 'const numOne = 5;\nconst numTwo = 6;\nconsole.log(numOne > numTwo);'

  return (
    <ChapterWithChallenge
      heading="Comparision operators - Greater than"
      question="In the console.log() statement below we use the Greater Than operator to check whether the value of numOne is greater than the value of numTwo. Change the code so that the console.log() statement logs true."
      initialInput={initialInput}
      editableLines={[true,true,false]}
      nextLink="/javascript-basics/operator" // Making only the second line editable
    />
  );
};

export default Chapter5;