import { Terminal } from "../../../icons/Terminal";
import { Globe } from "../../../icons/Globe";
import { Cpu } from "../../../icons/Cpu";
import { HardDrive } from "../../../icons/HardDrive";

export const Table = () => {
  return (
    <div className="endpoints-details-table">
      <div className="categories">
        <div className="category">
          <Cpu />
          <div>Processes</div>
        </div>
        <div className="spacer">|</div>
        <div className="category">
          <HardDrive />
          <div>Network Actions</div>
        </div>
        <div className="spacer">|</div>
        <div className="category">
          <Terminal />
          <div>Terminal History</div>
        </div>
        <div className="spacer">|</div>
        <div className="category">
          <Globe />
          <div>Browser History</div>
        </div>
      </div>
    </div>
  );
};
