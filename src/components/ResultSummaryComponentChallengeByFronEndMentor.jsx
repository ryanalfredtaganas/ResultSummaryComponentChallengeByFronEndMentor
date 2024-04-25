import React from "react";
import "./ResultSummaryComponentChallengeByFronEndMentor.css";

function ResultSummaryComponentChallengeByFronEndMentor() {
  return (
    <div className="container-fluid main d-flex justify-content-center align-items-center">
      <div className="shadow container-border">
        <div className="row">
          <div className="col-sm left-column text-center pt-3">
            <h4 className="py-3">Your Result</h4>
            <div className="d-flex justify-content-center align-items-center  m-auto">
              <div className="rate">
                <div className="big-num">76</div>
                <div>of 100</div>
              </div>
            </div>
            <h4 className="pb-2 pt-5">Great</h4>
            <h6 className="text-center pb-5 px-5">
              You scored higher than 65% of the people who have taken these
              tests.
            </h6>
          </div>
          <div className="col-sm d-flex flex-column right-column pt-3">
            <div className="mx-4">
              <div>
                <h3 className="py-3 bold">Summary</h3>
              </div>
              <div className="d-flex mb-3 justify-content-between reaction">
                <div className="bold">
                  <img src="https://raw.githubusercontent.com/ryanalfredtaganas/ResultSummaryComponentChallengeByFronEndMentor/8cf76f358b4fb169ccfdf0a830bca3b3195857ad/src/assets/images/icon-reaction.svg"></img>
                  Reaction
                </div>
                <div className="rating">
                  <span className="bold">80</span>
                  <span>/100</span>
                </div>
              </div>
              <div className="d-flex mb-3 justify-content-between memory">
                <div className="bold">
                  <img src="https://raw.githubusercontent.com/ryanalfredtaganas/ResultSummaryComponentChallengeByFronEndMentor/8cf76f358b4fb169ccfdf0a830bca3b3195857ad/src/assets/images/icon-memory.svg"></img>
                  Memory
                </div>
                <div className="rating">
                  <span className="bold">80</span>
                  <span>/100</span>
                </div>
              </div>
              <div className="d-flex mb-3 justify-content-between verbal">
                <div className="bold">
                  <img src="https://raw.githubusercontent.com/ryanalfredtaganas/ResultSummaryComponentChallengeByFronEndMentor/8cf76f358b4fb169ccfdf0a830bca3b3195857ad/src/assets/images/icon-verbal.svg"></img>
                  Verbal
                </div>
                <div className="rating">
                  <span className="bold">80</span>
                  <span>/100</span>
                </div>
              </div>
              <div className="d-flex mb-3 justify-content-between visual">
                <div className="bold">
                  <img src="https://raw.githubusercontent.com/ryanalfredtaganas/ResultSummaryComponentChallengeByFronEndMentor/8cf76f358b4fb169ccfdf0a830bca3b3195857ad/src/assets/images/icon-visual.svg"></img>
                  Visual
                </div>
                <div className="rating">
                  <span className="bold">80</span>
                  <span>/100</span>
                </div>
              </div>
              <button className="rounded-pill my-3 w-100">Continue</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultSummaryComponentChallengeByFronEndMentor;
