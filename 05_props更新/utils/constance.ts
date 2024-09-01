import { LanguageTypes } from "@/interface/tools";

export const LANG = "lang";
// route
export const routeLanguageProvider = `/:${LANG}(${Object.values(LanguageTypes).join("|")})`;

// language
export const loginPageText = {
	[LanguageTypes.CN]: {
		TOP_TIP: "在5分钟内登录以获得贷款，我们将向你发送详细信息以验证你的电话号码。",
		PHONE_TIP: "请输入你的手机号码",
		POLICY_TEXT: "我已阅读并接受 ",
		POLICY_LINK: "隐私协议、 条款和条件",
		OK_BTN: "继续",
	},
	[LanguageTypes.US]: {
		TOP_TIP: "Login in 5 minutes to get your loan and we will send you the details to verify your phone number.",
		PHONE_TIP: "Please enter your mobile phone number",
		POLICY_TEXT: "I have read and accept ",
		POLICY_LINK: "privacy agreement, terms and conditions",
		OK_BTN: "Continue",
	},
	[LanguageTypes.ES]: {
		TOP_TIP:
			"Inicie sesión en 5 minutos para obtener su préstamo y le enviaremos los detalles para verificar su número deteléfono",
		PHONE_TIP: "Por favor ingrese el número de teléfono móvil",
		POLICY_TEXT: "He leído y acepto ",
		POLICY_LINK: "acuerdo de privacidad, términos y condiciones",
		OK_BTN: "Continuar",
	},
};
