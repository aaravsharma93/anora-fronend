import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { getGrades, postGrades } from "../../api/getCoins";
import TextEditor from "./TextEditor";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "white",
  boxShadow: 24,
  p: 4,
  overflowY: "scroll",
  height: 800,
};

export default function CoinModal({ open, handleClose, selectedCoin }) {
  const [questions, setQuestions] = React.useState(false);

  React.useEffect(() => {
    if (selectedCoin) {
      getGrades(selectedCoin).then((res) => {
        if (res?.data) {
          setQuestions(res?.data);
        }
      });
    }
  }, [selectedCoin]);

  const handleInput = (text, question) => {
    let tempArr = Object.assign([], questions);
    tempArr.map((ques) => {
      if (ques._id === question._id) {
        ques.answer = text;
      }
    });
    setQuestions(tempArr);
  };

  const handleSubmit = () => {
    let answers = [];
    questions.forEach((val) => {
      answers.push({
        question_id: val._id,
        answer: val.answer,
      });
    });
    let payload = { answers: answers };
    console.log(payload, "payload");
    postGrades(selectedCoin, payload)
      .then((res) => {
        console.log(res);
        handleClose();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      {selectedCoin && (
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <h3 className="text-center bg-light">{selectedCoin}</h3>
            <div className="my-4">
              <h5 className="bg-light border-bottom text-center mb-2 mt-4">
                General
              </h5>
              {questions &&
                questions.length &&
                questions
                  .filter((val) => val.category === "general")
                  .map((question, index) => {
                    return (
                      <div key={index} className="mb-5">
                        <p>{question.question}</p>
                        {typeof window !== 'undefined' && 
                        typeof window?.navigator !== 'undefined' &&
                        <TextEditor
                          handleInput={handleInput}
                          question={question}
                        />}
                        {/* <textarea
                        type="text"
                        placeholder="Answer"
                        className="w-100 px-2"
                        onChange={(e) => handleInput(e, question)}
                        value={question.answer}
                      /> */}
                      </div>
                    );
                  })}
            </div>

            <div>
              <div className="bg-light border-bottom text-center mb-2 mt-5">
                <h5>Weighted Grades</h5>
                <p>*Rate the project (0-10). 0 = Scam, 10 = Bitcoin</p>
              </div>
              {questions &&
                questions.length &&
                questions
                  .filter((val) => val.category === "weighted")
                  .map((question, index) => {
                    return (
                      <div key={index} className="mb-5">
                        <p>{question.question}</p>
                        <input
                          type="number"
                          max="10"
                          min="0"
                          placeholder="Rating 0-10"
                          className="w-100 px-2"
                          onChange={(e) =>
                            handleInput(e.target.value, question)
                          }
                          value={question.answer}
                        />
                      </div>
                    );
                  })}
            </div>

            <div>
              <div className="bg-light border-bottom text-center">
                <h5>News and Info</h5>
              </div>
              {questions &&
                questions.length &&
                questions
                  .filter((val) => val.category === "news")
                  .map((question, index) => {
                    return (
                      <div key={index} className="mb-5">
                        <p>{question.question}</p>
                        {typeof window !== 'undefined' && 
                        typeof window?.navigator !== 'undefined' &&
                        <TextEditor
                          handleInput={handleInput}
                          question={question}
                        />}
                      </div>
                    );
                  })}
            </div>

            <div className="mt-4 d-flex justify-content-center">
              <Button variant="primary" onClick={handleSubmit}>
                Set Grade
              </Button>
              <Button variant="danger" onClick={handleClose}>
                Cancel
              </Button>
            </div>
          </Box>
        </Modal>
      )}
    </div>
  );
}
