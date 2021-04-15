import {
  fetchEmployee,
} from '@service/api/employees';

import * as types from '../types';

export const getEmployeeOverview = (payload) => async (dispatch) => {
  const employeeTree = {
    name: '',
    level: payload.level,
  };

  const res1 = await fetchEmployee(payload.empName);

  if (res1) {    
    dispatch({
      type: types.SET_EMPLOYEE_POSITION,
      payload: res1[0],
    });

    if (res1.length === 1) {
      employeeTree.items = [];
    }

    if (res1.length > 1) {
      const dSub1 = res1[1]["direct-subordinates"];
      employeeTree.items = await Promise.all(dSub1.map(async n => {
        let dSub2 = [];
        const res2 = await fetchEmployee(n);
        if (res2.length > 1) {
          dSub2 = res2[1]["direct-subordinates"];
        }

        return {
          name: n,
          position: res2[0],
          level: 2,
          items: await Promise.all(dSub2.map(async o => {
            let dSub3 = [];
            const res3 = await fetchEmployee(o);
            if (res3.length > 1) {
              dSub3 = res3[1]["direct-subordinates"];
            }
            return {
              name: o,
              position: res3[0],
              level: 3,
              items: await Promise.all(dSub3.map(async p => {
                let dSub4 = [];
                const res4 = await fetchEmployee(p);
                if (res4.length > 1) {
                  dSub4 = res4[1]["direct-subordinates"];
                }
                return {
                  name: p,
                  position: res4[0],
                  level: 4,
                  items: Promise.all(dSub4.map(async q => {
                    let dSub5 = [];
                    const res5 = await fetchEmployee(q);
                    if (res5.length > 1) {
                      dSub5 = res5[1]["direct-subordinates"];
                    }
                    return {
                      name: q,
                      position: res5[0],
                      level: 5,
                      items: dSub5.map(r => r),
                    }
                  })),
                }
              })),
            }
          })),
        }
      }));
    }

    dispatch({
      type: types.SET_EMPLOYEE_TREE,
      payload: employeeTree,
    });
  }

  return res1;
};
