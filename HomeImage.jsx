import { Container, Stack } from "@mui/material";
import React from "react";

function HomeImage() {
  return (
    <div class="image">
      <Container>
        <h1>HERE U GO.....</h1>
        <h2>let u know the type of events held......</h2>
        <Stack spacing={2} direction={"row"}>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRlooXoTjvqikH4mA_rbYVV4a8_gFdumK_-_S8uWx_tnSHbq1szLGZZ7iS36976D16-6c&usqp=CAU"
              alt="bg-1"
              height={200}
              width={300}
            ></img>
            <p>SEMINAR</p>
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyLSMCpLtyJgHUvwVxPDr8i2Ypp0VKLC30QfYmYM_TQb5yZmswwPvYVyVRt1hISL3xFtI&usqp=CAU"
              alt="bg-2"
              height={200}
              width={300}
            ></img>
            <p>CRICKET</p>
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4GKJJq4rJzWfOnoDbCk2N_cQOkfvbZEgk5QZd-kSk-L1a_JbQQ5GnVhl8gUVWgkNqu9Y&usqp=CAU"
              alt="bg-3"
              height={200}
              width={300}
            ></img>
            <p>FOOTBALL</p>
          </div>
          <div>
            <img
              src="https://wallpapercave.com/wp/wp10715824.jpg"
              alt="bg-4"
              height={200}
              width={300}
            ></img>
            <p>FEST</p>
          </div>
        </Stack>
        <Stack spacing={2} direction={"row"}>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh2Y3dJvuTwijMsJznG6dNeAQo1vGZjCYWNr8GlkkqxTSMG_0AWq3j1Pvab5UM7XX3I34&usqp=CAU"
              alt="bg-4"
              height={200}
              width={300}
            ></img>
            <p>BASKETBALL</p>
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl_cA-co6A4xqJmPwrwTWaYXPuSAzQrlURQQp1TFsTAkFUVTu-zPKe9d0enTN2slX6Zv4&usqp=CAU"
              alt="networking"
              height={200}
              width={300}
            ></img>
            <p>NETWORKING</p>
          </div>
          <div>
            <img
              src="data:image/jpeg;base64,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fC1uP3di/Bk+hv7VziKQyygqRXFM92bYxszmluoANqnADez4H4LyQP0va4i9Lg6uLo2qIsSk29TKbTMc2ErNAYW7g2XXx5LXQuAc0m6DgTp2dQPd5qiJKTk7ZEqMuJka5xc0OF86363E+JNBemHNJI4xHG6hySWjUCTvR8OF4UUTadphpPkIiKFPRh8ZLGHCN7mB1atJq64+CxTSue4ue4uceS7cnalRFSUgpBIIIJBBsEbEFZsE+NrwZWa2cEWRXnt4LY50zChjDBp1F2+gk+zXfZ23r61CmGTOpnwuhkOrVVP4dQNkHx7lrURVtvkiilwERFCkl5oCzQsgdwvmvoChEQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAEREAREQBERAevBsaWmwCb7xfcsWLI1UABXgK3V8FIBqsgcVfqsEptzvif0oCqIiAIiIAiIgCIiAIiIAiIgCIiAIi9GEjDrsXVIDzovdK2NvLfQXa8zpR3MaPjugMSIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgC9WA++9P1oiAwS+874lUREAREQBERAEREB//Z"
              alt="ppt"
              height={200}
              width={300}
            ></img>
            <p>PPT</p>
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlNe8LKh_flo30tY-DvYestbZDtF7f-7labA&usqp=CAU"
              alt="product"
              height={200}
              width={300}
            ></img>
            <p>PRODUCT LAUNCH</p>
          </div>
        </Stack>
      </Container>
    </div>
  );
}

export default HomeImage;
