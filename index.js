const core = require('@actions/core')
const exec = require('child_process').exec

try {
  installPMD()
} catch (error) {
  core.setFailed(error.message)
}

function installPMD(){
  var download = 'wget https://github.com/pmd/pmd/releases/download/pmd_releases%2F6.19.0/pmd-bin-6.19.0.zip -P /tmp'
  var unzip = 'unzip /tmp/pmd-bin-6.19.0.zip -d /tmp'
  var mk = 'mkdir /bin/pmd'
  var mv = 'mv /tmp/pmd-bin-6.19.0/* /bin/pmd'
  exec(download+' && '+unzip+' && '+mk+' && '+mv, function(error, stdout, stderr){
    if(error) console.log(stderr)
  })
}
