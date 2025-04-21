import toast from "react-hot-toast";
import { changePassword as changePasswordRequest } from "../../services";

export const useChangePassword = () => {
    const changePassword = async (password, newPassword) => {
        const responseData = await changePasswordRequest({password, newPassword});
        if (responseData.error) {
            return toast.error(
                responseData.e?.responseData?.data || 'Ocurrio un error al cambiar la contraseña, intente de nuevo'
            )
        }
        toast.success('Contraseña cambiada correctamente')
    }

    return {
        changePassword
    }
}