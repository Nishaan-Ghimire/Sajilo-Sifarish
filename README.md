# Sajilo-Sifarish

## API Documentation

### Register 

#### Request
```
Post request
url: /api/v1/users/register
{
fullName: "John Doe",
email: "johndoe@example.com",
password: "It's Secret"
}
```

### Response

```
{ 
    message: "User registered successfully" 
}

```


### Login 



#### Request
```
url: /api/v1/users/login
Post request
{
email: "johndoe@example.com",
password: "It's Secret"
}
```
### Response


```
{ 
    message: "User registered successfully" 
}

```



### Get Profile
```
/Get request

```

### Upload profile 
```
/UploadImage

```


### saveDetailsForm

```
post request
/api/v1/users/savedetailForm
 {
      "sifarish_id":"",
      "title":"",
      "type":"", 
      "municipality":"",
      "wardId":"",
      "address":"",
      "applicantName":"",
      "fathername":"",
      "applicantMobileNumber":"",
      
}
```

### saveDetailsTOAdmin
Get request
```
/api/v1/users/admin/getdetailForm

```


