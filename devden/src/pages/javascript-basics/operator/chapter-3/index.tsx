import ChapterWithChallenge from "@/pages/ChaptersComponents/ChapterWithChallenge"

const Chapter3 = () => {
  const initialInput = 'const numOne = 5;\nconst numTwo = 5;\nconsole.log(numOne != numTwo);'

  return (
    <ChapterWithChallenge
      heading="Comparision operators - Not Equal"
      question="In the console.log() statement below we use the Not Equal operator to check whether numOne and numTwo have different value. Change the code so that the console.log() statement logs true."
      initialInput={initialInput}
      editableLines={[true,true,false]} 
      nextLink="/javascript-basics/operator"// Making only the second line editable
    />
  );
};

export default Chapter3;
