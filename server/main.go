package main

import (
	"flag"
	"github.com/dogenzaka/go-iap/playstore"
	"io/ioutil"
	"log"
	"time"
)

var (
	packageName = flag.String("package", "", "Package Name")
	productID   = flag.String("product", "", "Product ID")
	token       = flag.String("token", "", "Token")
)

func main() {
	flag.Parse()
	jsonKey, err := ioutil.ReadFile("jsonKey.json")
	if err != nil {
		log.Fatal(err)
	}

	client, err := playstore.New(jsonKey)
	if err != nil {
		log.Fatal(err)
	}

	log.Println("package", *packageName)
	log.Println("product", *productID)
	log.Println("token", *token)

	res, err := client.VerifyProduct(*packageName, *productID, *token)
	if err != nil {
		log.Fatal(err)
	}

	log.Println(res.ConsumptionState)
	log.Println(res.DeveloperPayload)
	log.Println(res.Kind)
	log.Println(res.PurchaseState)
	date := time.Unix(res.PurchaseTimeMillis/1000, 0)
	log.Println(date)
	log.Println(res.ForceSendFields)
	log.Println(res.HTTPStatusCode)
	log.Println(res.Header)
}
