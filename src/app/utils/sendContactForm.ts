import { IInputs } from "@/types";

export const sendContactForm = async (data: IInputs) =>
  fetch("/api", {
    method: "POST",
    body: JSON.stringify(data),
  });
