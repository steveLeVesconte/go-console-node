import lifeCycle from "./services/lifeCycle/gameLifeCycle";

const startApp = async () => {
  lifeCycle.runGameCycle();
}

startApp();


