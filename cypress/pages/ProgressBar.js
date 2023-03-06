export default class {
  static ClickOnStartButton() {
    cy.get("#startStopButton").click();
    cy.get("#startStopButton").should("contain.text", "Stop");
  }
  // static ProgressBar() {
  //   cy.get("#progressBar .progress-bar").then((persontage) => {
  //     expect(persontage.text()).to.contains("100%");
  //     cy.get("#progressBar .progress-bar").should(
  //       "have.css",
  //       "background-color",
  //       "rgb(40, 167, 69)"
  //     );
  //   });
  //   cy.get("#resetButton").should("contain.text", "Reset");
  // }

  static newbar() {
    // Get the progress bar element
    cy.get("#progressBar .progress-bar")
      // Wait for the progress bar to start updating
      .then(() => {
        // Set a variable to track the progress of the progress bar
        let progress = 0;

        // Use a function to check the progress of the progress bar at regular intervals
        const checkProgress = () => {
          cy.get("#progressBar .progress-bar").then((el) => {
            // Get the current progress of the progress bar
            const currentProgress = el.attr("aria-valuenow");

            // If the current progress is greater than the previous progress, update the progress variable
            if (currentProgress > progress) {
              progress = currentProgress;
              cy.log(progress);
            }

            // If the progress is less than 100%, schedule another check in 500ms
            if (progress < 99) {
              cy.wait(1000).then(checkProgress);
            }
            if (progress >= 60) {
              cy.get("#progressBar .progress-bar").should("be.visible");
              cy.log("ok");
            }
          });
        };

        // Start checking the progress
        checkProgress();
      });
  }
}
