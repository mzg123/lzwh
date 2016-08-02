/**
 * Created by yjx on 2016/7/31.
 */
var test=require('../getData/test.js');

var getHandle=function(req,rep,qs){
   this._req=req;
    this._rep=rep;
    this._qs=qs;
}
getHandle.prototype={
    handle:function(url){

        this._rep.write(JSON.stringify(test));
        this._rep.end();
    }
}
module.exports=getHandle;