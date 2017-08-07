#sudo kill $(sudo lsof -t -i:80)
#if [ $(sudo lsof -t -i:80) > 0]
#then
#echo Hey that\'s a large number.
#pwd
#fi

SERVER=0.0.0.0
PORT=80
`nc -z -v -w5 $SERVER $PORT`
result1=$?

#Do whatever you want

if [  "$result1" != 0 ]; then
#  echo  'port 80 is closed'
  node '/root/web/app.js'
else
#  echo 'port 80 is open'
#  kill $(lsof -t -i:80)
  pid=$(lsof -i:80 -t);set -f;a=(${pid})
  for e in ${a[@]}
  do
#      echo $e
      echo "Node JS Server on port 80 is about to start..!"
      kill -9 $e
  done

#  /bin/sleep 3
  nohup node '/root/web/app.js' &
  /bin/sleep 1
  rm nohup.out
fi

#node .
