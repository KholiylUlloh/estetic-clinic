import axios from "axios";

export const wpAPI =
  "http://192.168.0.114:5000/api/v1/whatsapp/message/text";
export const netGsmSms =
  "https://api.netgsm.com.tr/sms/send/get/?usercode=kullanicidiniz&password=sifreniz&gsmno=5051234567,5441234568&message=testmesaji&msgheader=MesajBaslik";
export const baseURL = "https://crm.estetic.clinic/";
export const baseAPI = "https://crm.estetic.clinic/api/v1";
export const imageURL = "https://crm.estetic.clinic/";
export const BRANCH = 1;
export const ROOM_APPOINTMENT = 8;
export const DEFAULT_LANGUAGE = "tr";
export const ABOUT_KEYWORD = "neden-estatic";
// export const baseURL = "http://crm.estetic.com.tr/";
// export const baseAPI = "http://crm.estetic.com.tr/api/v1/";
export const createWhatsappMessage = "/whatsapp/message/text";
export const getServices = "/get-services";
export const getStories = "/get-stories";
export const getCampaigns = "/get-campaigns";
export const getCategories = "/get-service-groups";
export const getPages = "/get-pages";
export const getBlogs = "/get-blogs";
export const getPrevNextBlogs = "/get-blog-next-prev";
export const getFreeHourList = "/get-appointment-free-hours";
export const createOrder = "/create-order";
export const createAppointment = "/verification-order";

export const wpSendMessage = "/send-whatsapp-message";
export const addSalesCustomer = "/sales-customer";
export const addSalesContact = "/create-contact";
export const sendNotification = "/send-notification";
export const telegramMessage = "/send-messsage-telegram";
export const sendContactDetails = "/send-contact-details";

export const instance = () => {
  return axios.create({
    baseURL: baseAPI,
  });
};
