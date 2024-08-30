import { listAllSessions } from "../appwrite";
import deleteSession from "../appwrite/deleteSession";

const deleteAllActiveSession = async (activeId) => {
    const response = await listAllSessions();
    const sessionsToDelete = [];
    console.log('activeId >>', activeId);
    console.log('sessions >>', response?.sessions);
    response?.sessions.map((session) => {
        session.$id !== activeId && sessionsToDelete.push(deleteSession(session.$id));
    });
    await Promise.all(sessionsToDelete);
}

export default deleteAllActiveSession;