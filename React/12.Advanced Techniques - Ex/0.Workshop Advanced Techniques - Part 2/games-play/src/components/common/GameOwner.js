import { useParams, Outlet, Navigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

import { useGameContext } from "../../contexts/GameContext";

export const GameOwner = ({
    children,
}) => {
    const { gameId } = useParams();
    const { getGame } = useGameContext();
    const { userId } = useAuthContext();

    const currentGame = getGame(gameId);

    if (currentGame && currentGame._ownerId !== userId) {
        return <Navigate to={`/catalog/${gameId}`} replace />
    }

    return children ? children : <Outlet />
};