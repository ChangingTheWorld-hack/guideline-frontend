import React, { Fragment } from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import Home from "./Home";
import User from "./User";
import "./App.scss";

const App = () => {
  return (
    <Fragment>
      <div className="header">
        <div className="container">
          <div className="header__nav-group">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 1000 1000"
              width="52"
            >
              <g fill="white">
                <g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)">
                  <path d="M4811.2,4996.7c-126.6-32.1-307.4-140.6-395.8-235.1c-44.2-48.2-110.5-148.7-144.6-223c-58.3-122.6-64.3-152.7-64.3-325.5s6-202.9,62.3-323.5c36.2-72.3,104.5-176.8,156.7-229l92.4-98.4v-287.3c0-158.7-8-287.3-18.1-287.3c-40.2,0-202.9,211-363.6,474.1c-231,375.7-472.1,624.8-723.3,747.4c-325.5,158.7-251.1,152.7-1745.9,160.7l-1334,6l14.1-180.8c34.2-452,211-767.5,524.4-928.2c72.3-38.2,130.6-74.3,130.6-80.4c0-6-86.4-46.2-190.9-88.4c-104.5-42.2-190.9-86.4-190.9-96.4c0-58.3,188.9-359.6,295.3-476.2c204.9-221,403.8-321.5,695.1-351.6l138.6-16.1l-96.4-96.4c-110.5-112.5-112.5-106.5,92.4-259.2c417.9-309.4,884-363.7,1316-150.7l146.7,72.3l102.5-72.3c267.2-192.9,675.1-202.9,942.3-24.1l98.4,66.3l82.4-72.3l84.4-72.3V500.3c0-576.6-8-1048.7-16.1-1048.7c-34.2,0-361.6,126.6-516.3,198.9c-88.4,42.2-194.9,104.5-235.1,140.6l-76.3,66.3l124.6,62.3c395.8,202.9,632.9,652.9,530.4,1006.5c-48.2,160.7-198.9,317.4-351.6,361.6c-315.4,92.4-661-22.1-956.3-319.4c-186.8-186.8-291.3-367.7-351.6-604.7c-48.2-188.8-52.2-466.1-10-648.9c86.4-359.6,383.7-697.2,823.7-934.2l100.5-54.2l-150.7-154.7c-182.8-184.8-269.2-329.5-321.5-538.4c-46.2-182.8-50.2-309.4-12.1-492.2c72.3-341.5,327.5-648.9,705.2-853.9c78.3-40.2,142.6-76.4,146.7-80.4c4-2-30.1-52.2-74.3-110.5c-136.6-180.8-170.8-293.3-172.8-560.5c0-204.9,6-243.1,48.2-331.5c70.3-144.6,295.3-363.6,389.8-381.7c100.5-20.1,168.8,0,237.1,68.3c84.4,84.4,92.4,172.8,28.1,323.4c-32.1,74.3-48.2,144.7-42.2,172.8c14.1,50.2,106.5,168.8,134.6,168.8c10,0,18.1-38.2,18.1-86.4c0-144.6,54.2-265.2,160.7-361.6c206.9-186.8,458.1-180.8,653,16.1c108.5,108.5,150.7,204.9,150.7,349.6c0,78.3,2,82.4,42.2,62.3c22.1-12.1,58.3-52.2,80.4-86.4c44.2-72.3,38.2-134.6-28.1-267.2c-50.2-104.5-34.2-213,44.2-291.3c128.6-128.6,261.2-104.5,444,78.3c196.9,198.9,231.1,281.3,231.1,566.6c0,210.9-4,241.1-56.3,349.6c-30.1,64.3-86.4,162.7-126.6,217c-38.2,56.3-68.3,102.5-64.3,104.5c4,4,70.3,40.2,146.7,80.4c552.5,299.4,821.7,805.6,703.2,1315.9c-52.2,217-142.6,375.7-321.4,556.5l-160.7,164.8l138.6,76.3c331.5,184.8,570.6,417.9,693.1,677.1c96.4,198.9,122.5,323.5,122.5,554.5c0,367.7-126.6,673.1-391.8,936.2c-295.4,297.3-640.9,411.9-956.3,319.4c-82.4-24.1-132.6-56.3-213-138.6c-194.9-198.9-219-458.1-72.3-771.5c72.3-152.7,299.4-377.7,462.1-458.1l126.6-62.3l-76.3-66.3c-40.2-36.2-146.7-98.4-235.1-140.6c-154.7-72.3-482.2-198.9-516.3-198.9c-8,0-16.1,472.1-16.1,1046.7v1046.7l84.4,76.3l86.4,74.3l60.3-46.2c34.2-26.1,116.5-72.3,180.8-102.5c104.5-48.2,144.6-56.3,311.4-56.3c164.7,0,206.9,8,307.4,54.3c64.3,30.1,154.7,84.4,198.9,120.5l80.4,62.3l116.5-62.3c148.7-82.4,391.8-144.7,562.6-144.7c164.7,0,397.8,58.3,556.5,136.6c114.5,58.3,407.9,275.2,407.9,301.4c0,6-42.2,54.3-92.4,106.5l-92.4,92.4l138.6,16.1c287.3,30.1,498.3,136.6,699.2,355.6c104.5,114.5,291.3,415.9,291.3,472.1c0,10-86.4,54.2-190.9,94.4c-104.5,42.2-190.9,82.4-190.9,90.4c0,8,48.2,38.2,106.5,66.3c323.5,158.7,514.3,488.2,548.5,948.3l14.1,174.8l-1334-6c-1494.8-8-1420.4-2-1745.9-158.7c-249.1-122.6-492.2-373.7-723.3-749.4c-162.8-263.2-323.5-474.1-363.7-474.1c-10.1,0-18.1,128.6-18.1,287.3v287.3l92.4,98.4c52.2,52.2,120.5,156.7,156.7,229c56.3,120.5,62.3,150.7,62.3,325.5c0,180.8-4,198.9-74.3,343.6c-136.6,273.2-377.7,436-675,450C4959.8,5012.7,4855.3,5006.7,4811.2,4996.7z M5148.7,4671.2c172.8-52.2,333.5-273.2,333.5-458.1c0-249.1-233.1-482.2-482.2-482.2c-249.1,0-482.2,233.1-482.2,482.2c0,126.6,46.2,229,150.7,331.5C4809.1,4687.3,4959.8,4725.5,5148.7,4671.2z M2986.9,4020.3c369.7-76.3,566.6-243.1,888-751.4c233.1-369.7,377.7-530.4,538.4-602.7l104.5-48.2v-301.4l-2-303.4l-74.3,144.7l-74.3,144.6l-86.4-148.7c-138.6-237.1-297.3-351.6-488.2-351.6c-104.5,0-211,36.2-281.3,96.4c-58.3,48.2-202.9,249.1-225,311.4c-4,14.1-66.3-30.1-140.6-102.5c-156.7-148.7-305.4-223-510.3-251.1c-176.8-26.1-353.6-2-506.3,68.3l-104.5,48.2l460.1,458.1l460.1,458.1l118.5-54.2c64.3-30.1,130.6-58.3,144.6-66.3c14.1-6,42.2-56.3,60.3-112.5c70.3-204.9,217-363.7,427.9-460.1c98.4-46.2,108.5-48.2,128.6-16.1c36.2,52.2,150.7,259.2,150.7,269.2c0,6-36.2,20.1-82.4,34.2c-154.7,46.2-317.4,243.1-319.4,385.7c0,144.7-86.4,239.1-221,239.1c-130.6,0-305.4,114.5-373.7,247.1c-28.1,52.2-34.1,54.2-208.9,54.2h-178.8l16.1-56.2c30.1-104.5,106.5-231,196.9-329.5c52.2-52.2,88.4-100.5,84.4-106.5c-32.1-32.1-962.4-397.8-1054.8-413.9c-148.7-28.1-319.4,2-480.2,80.4c-134.6,66.3-311.4,231-281.3,261.2c12.1,12.1,313.4,142.6,673,291.3l653,271.2l-472.1,2c-534.4,0-673,20.1-865.9,122.6c-178.8,96.4-325.5,281.3-369.7,466.1l-14.1,54.2h1076.9C2659.4,4052.4,2856.3,4046.4,2986.9,4020.3z M9309.5,3998.2c-44.2-184.8-190.9-369.7-369.7-466.1c-192.9-102.5-331.5-122.6-865.9-122.6l-472.1-2l652.9-271.2c359.6-148.7,661-279.3,671.1-289.3c30.1-30.1-134.6-188.8-267.2-259.2c-148.7-78.4-341.5-112.5-492.2-84.4c-88.4,16.1-900.1,333.5-1038.7,405.8c-28.1,14.1-18.1,32.2,56.3,110.5c82.4,86.4,206.9,305.4,206.9,365.6c0,18.1-48.2,24.1-174.8,24.1l-176.8-2l-54.2-88.4c-72.3-120.5-182.8-188.9-339.5-211c-158.7-22.1-207-70.3-225-221c-14.1-116.5-86.4-257.2-166.8-319.4c-30.1-24.1-98.5-58.3-150.7-76.4l-96.4-34.1l72.3-132.6c104.5-190.9,100.4-186.8,221-130.6c194.9,88.4,369.7,289.3,427.9,486.2c18.1,56.2,40.2,90.4,68.3,98.4c24.1,6,90.4,34.1,148.7,64.3l106.5,52.2l462.1-462.1l462.1-460.1l-104.5-48.2c-154.7-70.3-351.6-94.4-526.4-66.3c-202.9,36.2-337.5,104.5-490.2,249.1c-74.3,72.3-136.6,116.5-140.6,102.5c-22.1-62.3-166.7-263.2-225-311.4c-34.1-30.1-96.4-64.3-138.6-76.3c-255.2-70.3-464.1,40.2-630.9,333.5l-84.4,150.7l-76.4-146.7l-74.3-146.7l-2,303.4v301.4l106.5,48.2c154.7,70.3,319.5,251.1,516.3,570.6c94.4,152.7,221,337.5,281.3,409.9c176.8,208.9,401.8,341.5,655,383.7c54.2,10,590.7,18.1,1191.4,20.1l1090.9,2L9309.5,3998.2z M5160.7,1378.3V-662.9l-80.4-24.1c-58.3-18.1-100.5-18.1-160.7-2l-80.4,22.1v2043.2v2043.3H5000h160.7V1378.3z M3917.1,966.4c108.5-54.2,144.6-208.9,88.4-367.7c-76.3-215-269.2-379.7-556.5-474.1c-92.4-30.1-172.8-60.3-180.8-68.3c-22.1-20.1,34.2-212.9,92.4-311.4c112.5-192.9,381.7-363.6,825.7-524.4c110.5-38.2,219-78.4,241.1-88.4c30.1-12.1-8-32.1-170.8-88.4c-116.5-38.2-239.1-82.4-273.2-96.5c-58.3-22.1-76.3-18.1-219,48.2c-315.4,150.7-610.8,395.8-709.2,586.7c-142.6,281.3-140.6,624.8,8,918.1c56.3,110.5,243.1,317.4,341.5,379.7C3589.6,992.6,3798.6,1028.7,3917.1,966.4z M6492.8,932.3c148.7-68.3,353.6-263.2,432-411.9c168.8-317.4,166.8-685.1-2-974.4c-74.4-126.6-323.5-351.6-502.3-454.1c-307.4-174.8-657-305.4-1593.2-594.7c-275.2-86.4-572.6-188.9-661-231c-263.2-122.6-452-327.5-452-494.3c0-237.1,146.7-405.8,504.3-576.6c126.6-60.3,245.1-114.5,265.2-120.5c18.1-8,34.2-30.1,34.2-54.2c0-30.1-36.2-58.3-142.6-112.5l-142.6-70.3l-104.5,42.2c-172.8,74.3-379.7,213-492.2,329.5c-419.9,446-269.2,1050.8,343.6,1378.2c66.3,36.2,540.4,202.9,1050.7,371.7c1002.5,331.5,1275.8,444,1456.6,606.7c56.2,50.2,124.6,130.6,152.7,178.8c58.3,98.4,114.5,291.3,92.4,311.4c-8,8-88.4,38.2-180.8,68.3c-291.3,94.4-480.2,257.2-556.5,474.1c-56.3,156.7-24.1,297.3,78.4,361.6C6159.2,1016.7,6338.1,1004.6,6492.8,932.3z M6155.2-1496.7c401.8-267.2,548.5-679.1,373.7-1054.8c-72.3-154.7-206.9-301.4-383.7-417.9c-162.8-108.5-225-134.6-737.3-321.5c-468.1-170.8-749.4-287.3-924.2-383.7c-225-124.6-427.9-345.6-427.9-468.1c0-22.1-8-46.2-20.1-52.2c-12.1-8-20.1,42.2-20.1,134.6c0,241.1,124.6,444,373.7,608.8c60.3,40.2,413.9,208.9,787.6,373.7c769.5,341.6,821.7,369.7,954.3,498.3c98.5,94.4,154.7,223,154.7,351.6c0,202.9-263.2,444-618.8,564.6l-126.6,42.2l247.1,92.4c136.6,50.2,253.1,92.4,259.2,94.4C6052.8-1434.4,6101-1460.5,6155.2-1496.7z M5160.7-2232v-500.3l-160.7-72.3l-160.7-72.3v520.4v520.3L4996-1786c84.4,26.1,156.7,50.2,160.7,50.2C5158.7-1733.8,5160.7-1958.8,5160.7-2232z M4507.8-2573.6c-6-6-96.4,32.1-198.9,82.4c-188.9,94.4-273.2,166.7-273.2,237.1c0,76.3,194.9,217,401.8,289.3l70.3,24.1l6-311.4C4515.8-2422.9,4513.8-2567.5,4507.8-2573.6z M5737.4-2041.2c118.5-60.3,227-162.7,227-213c0-66.3-76.3-136.6-235.1-219c-86.4-44.2-176.8-86.4-200.9-94.4l-46.2-12.1v321.4v321.5l76.3-26.1C5600.7-1978.9,5681.1-2013,5737.4-2041.2z M5803.6-3616.3c132.6-150.7,166.8-233,176.8-427.9c8-178.8-10-196.9-52.2-48.2c-32.1,108.5-156.7,249.1-317.5,351.6c-70.3,46.2-128.6,94.4-128.6,108.5c0,20.1,172.8,104.5,225,108.5C5713.2-3521.9,5757.4-3564,5803.6-3616.3z M5160.7-3963.9c0-231-2-245.1-50.2-291.3c-30.1-32.1-72.3-50.2-110.5-50.2c-38.2,0-80.4,18.1-110.5,50.2c-46.2,44.2-50.2,64.3-50.2,225v176.8l156.7,64.3c84.4,36.2,156.7,64.3,160.7,66.3C5158.7-3722.8,5160.7-3831.3,5160.7-3963.9z" />
                  <path d="M3434.9,785.6c-56.3-72.3-54.3-158.7,8-219c80.4-80.4,192.9-60.3,247.1,44.2c36.2,68.3,28.1,124.6-26.1,176.8C3595.6,858,3491.2,855.9,3434.9,785.6z" />
                  <path d="M6336.1,787.6c-72.3-70.3-58.3-178.8,28.1-245.1c90.4-68.3,243.1,14.1,243.1,130.6C6607.3,821.8,6438.5,892.1,6336.1,787.6z" />
                </g>
              </g>
            </svg>
            <NavLink exact className="header__nav-link" to="/">
              Главная
            </NavLink>
            <NavLink className="header__nav-link" to="/user">
              Консультация
            </NavLink>
          </div>
        </div>
      </div>
      <Switch>
        <Route
          path="/user"
          render={({ history }) => <User history={history} />}
        />
        <Route path="/" render={() => <Home />} />
      </Switch>
    </Fragment>
  );
};

export default App;
