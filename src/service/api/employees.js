import { GET } from '../request';

/**
 * fetch employee list
 * @param {*} payload
 */
export async function fetchEmployee(employeeName) {
  return GET(`/employees/${employeeName}`);
}
