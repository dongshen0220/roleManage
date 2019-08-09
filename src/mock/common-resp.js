class CommonResp {
    code = 10000;
    msg = ''
    data = null;
    constructor (code, msg, data) {
      this.code = code
      this.msg = msg
      this.data = data
    }

    toString () {
      return JSON.stringify(this)
    }
}

export default CommonResp
