import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getLoggedUser } from "../redux/Actions";

export function useGetLoggedUser() {
  const dispatch = useDispatch();
  const loggedUser = useSelector((state) => state.loggedUser);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userId = await AsyncStorage.getItem("@userId");
        if (userId) {
          dispatch(getLoggedUser(userId));
        }
      } catch (error) {
        console.error("Error al obtener el usuario:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  return loggedUser;
}
