import { useTranslation } from "react-i18next";
import { useToast } from "../components/toast/ToastProvider";

type CopyFn = (text: string) => Promise<boolean> // Return success

function useCopyToClipboard(): CopyFn {
  const { show } = useToast();
  const { t } = useTranslation();

  const copy: CopyFn = async (text, toast = true) => {
    if (!navigator?.clipboard) {
      console.warn('Clipboard not supported')
      return false
    }

    // Try to save to clipboard then save it in the state if worked
    try {
      await navigator.clipboard.writeText(text)
      toast && show(t("Copied!"))
      return true
    } catch (error) {
      console.warn('Copy failed', error)
      return false
    }
  }

  return copy
}

export default useCopyToClipboard
