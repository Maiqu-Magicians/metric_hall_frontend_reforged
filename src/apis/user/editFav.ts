import axios from "axios";

export async function addFavourite(evaId: number, userId: number): Promise<void> {
    await axios({
        url: `/api/user/addLikeEva?userId=${userId}&evaId=${evaId}`,
        method:"POST",
    })
}

export async function delFavourite(evaId: number, userId: number): Promise<void> {
    await axios({
        url: `/api/user/deleteLikeEva?userId=${userId}&evaId=${evaId}`,
        method:"POST",
    })
}