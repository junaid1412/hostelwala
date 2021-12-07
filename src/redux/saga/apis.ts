// const baseUrl = "https://hostelwala.com/api/apiforapp";
const baseUrl = "http://10.0.2.2/hostelwala/api/apiforapp";
type Option = {
  url: string;
  method: "post" | "get";
  body: any;
};

const FetchCall = async function (
  url: string,
  method: "POST" | "GET",
  body: any
) {
  console.log("FetchCall", baseUrl + url);
  // var myHeaders = new Headers();
  // myHeaders.append(
  //   "Cookie",
  //   "ci_session=85bf4b2423bf6ab836c5e2054a8c4dc12024ec3b"
  // );
  const d: any = await fetch(baseUrl + url, {
    headers: {
      // Cookie: "ci_session=85bf4b2423bf6ab836c5e2054a8c4dc12024ec3b",
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    mode: "cors",
    // cache: "no-cache",
    method,
    body: JSON.stringify(body),
  });

  //   axios({
  //   method: 'post',
  //   url: '/user/12345',
  //   data: {
  //     firstName: 'Fred',
  //     lastName: 'Flintstone'
  //   }
  // });

  const r: any = await d.json();
  console.log({ r });
  return r;
};

export function Login(d: any) {
  return FetchCall("/login", "POST", d);
}
export function SendOTP(d: any) {
  return FetchCall("/send_otp", "POST", d);
}
export function Register(d: any) {
  return FetchCall("/register", "POST", d);
}
export function ForgetPassword(d: any) {
  return FetchCall("/forgetpassword", "POST", d);
}
export function TenantDetail(d: any) {
  return FetchCall("/tenantdetail", "POST", d);
}
