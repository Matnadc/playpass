import { onMounted, ref } from "vue";
import { getUserProfile } from "../services/user-profiles.js"

export function useAuthUser(id) {
  
  const newUser = ref({
    id: "",
    email: "",
    displayName: "",
    photoURL: "",
    rol: "",
  });

  const isLoading = ref(true);

  onMounted(async () => {
    try {
      newUser.value = await getUserProfile(id);
      isLoading.value = false;
    } catch (err) {

    }
  });

  return { newUser, isLoading }
}