// Old open tabs must never trigger paid translation.
export default () => Response.json({error:'自動翻譯已停用，請重新整理網頁並手動貼上中日對照教材。',code:'TRANSLATION_DISABLED'},{status:410,headers:{'Cache-Control':'no-store'}});
export const config={path:'/api/study/translate'};
