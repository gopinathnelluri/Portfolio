#sudo kill $(sudo lsof -t -i:80)
#sudo kill $(sudo lsof -t -i:443)


pid=$(lsof -i:80 -t);set -f;a=(${pid})
for e in ${a[@]}
do
    kill -9 $e
done

pid=$(lsof -i:443 -t);set -f;a=(${pid})
for e in ${a[@]}
do
    kill -9 $e
done


nohup node '/root/web/app.js' &
/bin/sleep 1
rm nohup.out
