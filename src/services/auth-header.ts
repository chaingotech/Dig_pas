type AuthHeader = Record<'Authorization', string>

export default (): AuthHeader => {
  const token = localStorage?.getItem?.('token') || ''

  if (token) {
    return { Authorization: 'Bearer ' + token };
  } else {
    return {} as AuthHeader;
  }
}