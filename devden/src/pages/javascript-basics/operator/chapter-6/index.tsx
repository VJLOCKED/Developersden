import ChapterWithChallenge from "@/pages/ChaptersComponents/ChapterWithChallenge"

const Chapter6 = () => {
  const initialInput = 'const numOne = 2;\nconst numTwo = 1;\nconsole.log(numOne < numTwo);'

  return (
    <ChapterWithChallenge
      heading="Comparision operators - Less than"
      question="In the console.log() statement below we use the Less Than operator to check whether the value of numOne is less than the value of numTwo. Change the code so that the console.log() statement logs true.
"
      initialInput={initialInput}
      editableLines={[true,true,false]} 
      nextLink="/javascript-basics/operator"// Making only the second line editable
    />
  );
};

export default Chapter6;
