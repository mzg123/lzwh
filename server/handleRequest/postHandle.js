/**
 * Created by yjx on 2016/7/31.
 */

var postHandle=function(req,rep){
    this._req=req;
    this._rep=rep;
}
postHandle.prototype={
    handle:function(postData){

        this._rep.write(JSON.stringify(postData));
        this._rep.end();
    }
}
module.exports=postHandle;