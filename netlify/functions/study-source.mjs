export default () => Response.json({error:'網址自動擷取已停用，請手動貼上中日對照教材。',code:'SOURCE_DISABLED'},{status:410,headers:{'Cache-Control':'no-store'}});
export const config={path:'/api/study/source'};
