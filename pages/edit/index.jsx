import { useState, useEffect } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { TextField, MenuItem } from "@mui/material";

const steps = ["Data Umum", "Data Teknis", "Data Finance", "Data Sales"];

const Index = () => {
  const [step, setStep] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [CID, setCID] = useState("");
  console.log(CID, "CID");
  console.log(Math.ceil(scrollY));
  console.log(scrollY >= 80);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
  }, []);

  const currencies = [
    {
      value: "USD",
      label: "$",
    },
    {
      value: "EUR",
      label: "€",
    },
    {
      value: "BTC",
      label: "฿",
    },
    {
      value: "JPY",
      label: "¥",
    },
  ];

  console.log(step);
  const handleNext = () => {
    if (step === steps.length) {
      return;
    }
    setStep(step + 1);
  };
  const handlePrevious = () => {
    if (step === 0) {
      return;
    }
    setStep(step - 1);
  };
  return (
    <div className="px-[10px] py-5">
      <div
        className={`w-[100%] bg-white z-10 flex justify-center ${
          scrollY >= 45 ? "fixed top-0 w-[100%] pt-5 pr-5" : ""
        }`}
      >
        <div className="w-[40%] py-[5px] mb-3">
          <Stepper
            activeStep={step}
            alternativeLabel
            sx={{
              "& .MuiStepConnector-line": {
                borderTopWidth: "5px",
                borderRadius: "40px",
              },
              "& .MuiStepConnector-root.Mui-active .MuiStepConnector-line": {
                // borderColor: "rgb(243,246,249)",
              },
              "& .MuiStepLabel-root .Mui-active": {
                fontFamily: "Roboto",
                fontWeight: 500,
                color: "#009EF7",
              },
              "& .MuiStepLabel-root .Mui-completed": {
                color: "#009EF7", // circle color (COMPLETED)
                fontFamily: "Roboto",
                fontWeight: 500,
              },
              "& .MuiStepConnector-root.Mui-completed .MuiStepConnector-line": {
                borderColor: "#009EF7",
              },
              "& .MuiStepLabel-label": {
                fontSize: "12px",
              },
            }}
          >
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel sx={{ backgroundColor: "white" }}>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </div>
      </div>
      <div
        className={`flex justify-center space-x-48 ${
          scrollY >= 45 ? "pt-[80px]" : ""
        }`}
      >
        <div className="w-[35%] flex flex-col">
          <label
            htmlFor=""
            className="font-['Roboto'] text-xs text-[#414141] font-semibold mb-1"
          >
            CID
          </label>
          <TextField
            sx={{
              backgroundColor: "#F3F6F9",
              width: "100%",
              borderRadius: "4px",
              paddingLeft: "10px",
              "& .MuiInputBase-root": {
                height: "32px",
              },
              "& .MuiInputBase-root input": {
                "::placeholder": {
                  fontSize: "12px",
                },
              },
            }}
            placeholder="CID"
            variant="standard"
            InputProps={{
              disableUnderline: true, // <== added this
            }}
            size="small"
            className="mb-3"
            onChange={(e) => setCID(e.target.value)}
          />
          <label
            htmlFor=""
            className="font-['Roboto'] text-xs text-[#414141] font-semibold mb-1"
          >
            SID
          </label>
          <TextField
            sx={{
              backgroundColor: "#F3F6F9",
              width: "100%",
              borderRadius: "4px",
              paddingLeft: "10px",
              "& .MuiInputBase-root": {
                height: "32px",
              },
              "& .MuiInputBase-root input": {
                "::placeholder": {
                  fontSize: "12px",
                },
              },
            }}
            placeholder="SID"
            variant="standard"
            InputProps={{
              disableUnderline: true, // <== added this
            }}
            size="small"
            className="mb-3"
          />
          <label
            htmlFor=""
            className="font-['Roboto'] text-xs text-[#414141] font-semibold mb-1"
          >
            Nama Pelanggan / Customer Name
          </label>
          <TextField
            sx={{
              backgroundColor: "#F3F6F9",
              width: "100%",
              borderRadius: "4px",
              paddingLeft: "10px",
              "& .MuiInputBase-root": {
                height: "32px",
              },
              "& .MuiInputBase-root input": {
                "::placeholder": {
                  fontSize: "12px",
                },
              },
            }}
            placeholder="Nama Pelanggan / Customer Name"
            variant="standard"
            InputProps={{
              disableUnderline: true, // <== added this
            }}
            size="small"
            className="mb-3"
          />
          <label
            htmlFor=""
            className="font-['Roboto'] text-xs text-[#414141] font-semibold mb-1"
          >
            Koordinat
          </label>
          <TextField
            sx={{
              backgroundColor: "#F3F6F9",
              width: "100%",
              borderRadius: "4px",
              paddingLeft: "10px",
              "& .MuiInputBase-root": {
                height: "32px",
              },
              "& .MuiInputBase-root input": {
                "::placeholder": {
                  fontSize: "12px",
                },
              },
            }}
            placeholder="Koordinat"
            variant="standard"
            InputProps={{
              disableUnderline: true, // <== added this
            }}
            size="small"
            className="mb-3"
          />
          <label
            htmlFor=""
            className="font-['Roboto'] text-xs text-[#414141] font-semibold mb-1"
          >
            Area
          </label>
          <TextField
            defaultValue="EUR"
            select
            variant="standard"
            size="small"
            sx={{
              backgroundColor: "rgb(243,246,249)",
              borderRadius: "4px",
              fontSize: "13px",
              "& .MuiFormLabel-root": {
                fontSize: "12px",
              },
              "& .MuiSelect-select": {
                paddingLeft: "12px",
                paddingTop: "5px",
              },
            }}
            InputProps={{
              disableUnderline: true, // <== added this
            }}
          >
            {currencies.map((option) => (
              <MenuItem
                sx={{
                  fontSize: "13px",
                }}
                key={option.value}
                value={option.value}
              >
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <label
            htmlFor=""
            className="font-['Roboto'] text-xs text-[#414141] font-semibold mb-1 mt-3"
          >
            Sales
          </label>
          <TextField
            defaultValue="EUR"
            select
            variant="standard"
            size="small"
            sx={{
              backgroundColor: "rgb(243,246,249)",
              borderRadius: "4px",
              fontSize: "13px",
              "& .MuiFormLabel-root": {
                fontSize: "12px",
              },
              "& .MuiSelect-select": {
                paddingLeft: "12px",
                paddingTop: "5px",
              },
            }}
            InputProps={{
              disableUnderline: true, // <== added this
            }}
          >
            {currencies.map((option) => (
              <MenuItem
                sx={{
                  fontSize: "13px",
                }}
                key={option.value}
                value={option.value}
              >
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <label
            htmlFor=""
            className="font-['Roboto'] text-xs text-[#414141] font-semibold mb-1 mt-3"
          >
            Product
          </label>
          <TextField
            defaultValue="EUR"
            select
            variant="standard"
            size="small"
            sx={{
              backgroundColor: "rgb(243,246,249)",
              borderRadius: "4px",
              fontSize: "13px",
              "& .MuiFormLabel-root": {
                fontSize: "12px",
              },
              "& .MuiSelect-select": {
                paddingLeft: "12px",
                paddingTop: "5px",
              },
            }}
            InputProps={{
              disableUnderline: true, // <== added this
            }}
          >
            {currencies.map((option) => (
              <MenuItem
                sx={{
                  fontSize: "13px",
                }}
                key={option.value}
                value={option.value}
              >
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <label
            htmlFor=""
            className="font-['Roboto'] text-xs text-[#414141] font-semibold mb-1 mt-3"
          >
            Bandwidth
          </label>
          <TextField
            sx={{
              backgroundColor: "#F3F6F9",
              width: "100%",
              borderRadius: "4px",
              paddingLeft: "10px",
              "& .MuiInputBase-root": {
                height: "32px",
              },
              "& .MuiInputBase-root input": {
                "::placeholder": {
                  fontSize: "12px",
                },
              },
            }}
            placeholder="Bandwidth"
            variant="standard"
            InputProps={{
              disableUnderline: true, // <== added this
            }}
            size="small"
            className="mb-3"
          />
          <label
            htmlFor=""
            className="font-['Roboto'] text-xs text-[#414141] font-semibold mb-1"
          >
            Validation Status
          </label>
          <TextField
            defaultValue="EUR"
            select
            variant="standard"
            size="small"
            sx={{
              backgroundColor: "rgb(243,246,249)",
              borderRadius: "4px",
              fontSize: "13px",
              "& .MuiFormLabel-root": {
                fontSize: "12px",
              },
              "& .MuiSelect-select": {
                paddingLeft: "12px",
                paddingTop: "5px",
              },
            }}
            InputProps={{
              disableUnderline: true, // <== added this
            }}
          >
            {currencies.map((option) => (
              <MenuItem
                sx={{
                  fontSize: "13px",
                }}
                key={option.value}
                value={option.value}
              >
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div className="w-[35%] flex flex-col">
          <label
            htmlFor=""
            className="font-['Roboto'] text-xs text-[#414141] font-semibold mb-1"
          >
            Status
          </label>
          <TextField
            defaultValue="EUR"
            select
            variant="standard"
            size="small"
            sx={{
              backgroundColor: "rgb(243,246,249)",
              borderRadius: "4px",
              fontSize: "13px",
              "& .MuiFormLabel-root": {
                fontSize: "12px",
              },
              "& .MuiSelect-select": {
                paddingLeft: "12px",
                paddingTop: "5px",
              },
            }}
            InputProps={{
              disableUnderline: true, // <== added this
            }}
          >
            {currencies.map((option) => (
              <MenuItem
                sx={{
                  fontSize: "13px",
                }}
                key={option.value}
                value={option.value}
              >
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <label
            htmlFor=""
            className="font-['Roboto'] text-xs text-[#414141] font-semibold mb-1 mt-3"
          >
            Aplikasi
          </label>
          <TextField
            defaultValue="EUR"
            select
            variant="standard"
            size="small"
            sx={{
              backgroundColor: "rgb(243,246,249)",
              borderRadius: "4px",
              fontSize: "13px",
              "& .MuiFormLabel-root": {
                fontSize: "12px",
              },
              "& .MuiSelect-select": {
                paddingLeft: "12px",
                paddingTop: "5px",
              },
            }}
            InputProps={{
              disableUnderline: true, // <== added this
            }}
          >
            {currencies.map((option) => (
              <MenuItem
                sx={{
                  fontSize: "13px",
                }}
                key={option.value}
                value={option.value}
              >
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <label
            htmlFor=""
            className="font-['Roboto'] text-xs text-[#414141] font-semibold mb-1 mt-3"
          >
            Visit
          </label>
          <TextField
            defaultValue="EUR"
            select
            variant="standard"
            size="small"
            sx={{
              backgroundColor: "rgb(243,246,249)",
              borderRadius: "4px",
              fontSize: "13px",
              "& .MuiFormLabel-root": {
                fontSize: "12px",
              },
              "& .MuiSelect-select": {
                paddingLeft: "12px",
                paddingTop: "5px",
              },
            }}
            InputProps={{
              disableUnderline: true, // <== added this
            }}
          >
            {currencies.map((option) => (
              <MenuItem
                sx={{
                  fontSize: "13px",
                }}
                key={option.value}
                value={option.value}
              >
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <label
            htmlFor=""
            className="font-['Roboto'] text-xs text-[#414141] font-semibold mb-1 mt-3"
          >
            Lastmile 2
          </label>
          <TextField
            defaultValue="EUR"
            select
            variant="standard"
            size="small"
            sx={{
              backgroundColor: "rgb(243,246,249)",
              borderRadius: "4px",
              fontSize: "13px",
              "& .MuiFormLabel-root": {
                fontSize: "12px",
              },
              "& .MuiSelect-select": {
                paddingLeft: "12px",
                paddingTop: "5px",
              },
            }}
            InputProps={{
              disableUnderline: true, // <== added this
            }}
          >
            {currencies.map((option) => (
              <MenuItem
                sx={{
                  fontSize: "13px",
                }}
                key={option.value}
                value={option.value}
              >
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <label
            htmlFor=""
            className="font-['Roboto'] text-xs text-[#414141] font-semibold mb-1 mt-3"
          >
            Kabuputen
          </label>
          <TextField
            defaultValue="EUR"
            select
            variant="standard"
            size="small"
            sx={{
              backgroundColor: "rgb(243,246,249)",
              borderRadius: "4px",
              fontSize: "13px",
              "& .MuiFormLabel-root": {
                fontSize: "12px",
              },
              "& .MuiSelect-select": {
                paddingLeft: "12px",
                paddingTop: "5px",
              },
            }}
            InputProps={{
              disableUnderline: true, // <== added this
            }}
          >
            {currencies.map((option) => (
              <MenuItem
                sx={{
                  fontSize: "13px",
                }}
                key={option.value}
                value={option.value}
              >
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <label
            htmlFor=""
            className="font-['Roboto'] text-xs text-[#414141] font-semibold mb-1 mt-3"
          >
            Alamat
          </label>
          <TextField
            multiline
            sx={{
              backgroundColor: "#F3F6F9",
              width: "100%",
              borderRadius: "4px",
              paddingLeft: "10px",
              "& .MuiInputBase-root": {
                minHeight: "105px",
              },
              "& .MuiInputBase-root input": {
                "::placeholder": {
                  fontSize: "12px",
                },
              },
            }}
            placeholder="Alamat"
            variant="standard"
            InputProps={{
              disableUnderline: true, // <== added this
            }}
            size="small"
            className="mb-3"
          />
          <label
            htmlFor=""
            className="font-['Roboto'] text-xs text-[#414141] font-semibold mb-1"
          >
            Service
          </label>
          <TextField
            defaultValue="EUR"
            select
            variant="standard"
            size="small"
            sx={{
              backgroundColor: "rgb(243,246,249)",
              borderRadius: "4px",
              fontSize: "13px",
              "& .MuiFormLabel-root": {
                fontSize: "12px",
              },
              "& .MuiSelect-select": {
                paddingLeft: "12px",
                paddingTop: "5px",
              },
            }}
            InputProps={{
              disableUnderline: true, // <== added this
            }}
          >
            {currencies.map((option) => (
              <MenuItem
                sx={{
                  fontSize: "13px",
                }}
                key={option.value}
                value={option.value}
              >
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <label
            htmlFor=""
            className="font-['Roboto'] text-xs text-[#414141] font-semibold mb-1 mt-3"
          >
            Lastmile 1
          </label>
          <TextField
            defaultValue="EUR"
            select
            variant="standard"
            size="small"
            sx={{
              backgroundColor: "rgb(243,246,249)",
              borderRadius: "4px",
              fontSize: "13px",
              "& .MuiFormLabel-root": {
                fontSize: "12px",
              },
              "& .MuiSelect-select": {
                paddingLeft: "12px",
                paddingTop: "5px",
              },
            }}
            InputProps={{
              disableUnderline: true, // <== added this
            }}
          >
            {currencies.map((option) => (
              <MenuItem
                sx={{
                  fontSize: "13px",
                }}
                key={option.value}
                value={option.value}
              >
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </div>
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Index;
