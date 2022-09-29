import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./Phone.css";

function SkeletonPhone() {
  return (
    <div className="card">
      <div className="img-cont">
        <Skeleton width={300} height={300} />
      </div>
      <div className="info-cont">
        <div className="main-info">
          <div className="name-manuf">
            <Skeleton height={35} width={150} />
            <Skeleton height={25} width={75} />
          </div>
        </div>
        <div className="lower-bar">
          <Skeleton width={50} height={50} circle={true} />
        </div>
      </div>
    </div>
  );
}

export default SkeletonPhone;
