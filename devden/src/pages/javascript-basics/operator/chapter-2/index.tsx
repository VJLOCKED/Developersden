import ChapterWithChallenge from "@/pages/ChaptersComponents/ChapterWithChallenge";

const Chapter2 = () => {
  const initialInput = 'const numOne = 5;\nconst numTwo = 6;\nconsole.log(numOne == numTwo);';

  return (
    <ChapterWithChallenge
      heading="Comparison operators - Equal"
      question="In the console.log() statement below we use the Equal operator to check whether numOne and numTwo have the same value. Change the code so that the console.log() statement logs true."
      initialInput={initialInput}
      editableLines={[true, true, false]} // Making only the second line editable
      nextLink="/javascript-basics/operator" // Pass the dynamic link for the next chapter
    />
  );
};

export default Chapter2;
