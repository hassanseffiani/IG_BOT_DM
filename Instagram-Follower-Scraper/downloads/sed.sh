cut -d',' -f 2 $1 > test.csv
sed -i -r '/^\s*$/d' test.csv
sed -i '1d' test.csv
./p.py