import { PageServerLoad } from './$types';
 
export const config = {
  runtime: 'edge',
};
 
export const load = ({ cookies }): PageServerLoad<any> => {
  // Load function code here
};