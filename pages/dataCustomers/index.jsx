import { useEffect, useState } from "react";
import Button from "../../components/otherComponents/Button";
import { IoMdAdd } from "react-icons/io";
import { BiExport } from "react-icons/bi";
import { AiTwotoneFilter } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";
import customer from "../../customer.json";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const Index = () => {
  // const [customer, setCustomer] = useState();

  // useEffect(() => {}, [
  //   setCustomer
  // ]);

  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // just trigger this so that the initial state
    // is updated as soon as the component is mounted
    // related: https://stackoverflow.com/a/63408216
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const thead = [
    "NO",
    "Action",
    "CID",
    "SID",
    "Nama Pelanggan",
    "Koordinat",
    "Area",
    "Sales",
    "Product",
    "Bandwidth",
    "Validation Status",
    "Status",
    "Kabupaten",
    "Visit",
    "Service",
    "Alamat",
    "Lastmile2",
    "Lastmile1",
    "Aplikasi",
    "BTS1",
    "BTS2",
    "IP Adress",
    "Vendor",
    "Note Teknis",
    "Instalation Date",
    "Tanggal BAA",
    "Hotspot",
    "Mac Adress",
  ];

  const theadText = () => {
    let text = [];
    for (let i = 0; i < thead.length; i++) {
      text.push(
        <TableCell
          key={i}
          align="left"
          sx={{
            fontFamily: "Roboto",
            fontWeight: "600",
            fontSize: "10px",
            color: "#414141",
            paddingTop: "3px",
            paddingBottom: "0px",
            paddingLeft: "10px",
          }}
        >
          {thead[i]}
        </TableCell>
      );
    }
    return text;
  };

  return (
    <div>
      <div className="px-4 py-2">
        <div>
          <div className="flex mb-2 justify-between">
            <div className="flex w-[15%] h-[26px] ml-[50px]">
              <Button className="bg-[#F3F6F9] pl-2 pr-3 rounded-tl-md rounded-bl-md">
                <FiSearch className="text-[#B5B5C3]" />
              </Button>
              <input
                placeholder="Cari"
                type="text"
                className="w-full py-[5px] rounded-tr-md rounded-br-md bg-[#F3F6F9] outline-none text-['Roboto'] text-xs font-normal placeholder:text-['Roboto'] placeholder:text-xs placeholder:font-normal"
              />
            </div>
            <div className="flex space-x-3 mr-[30px]">
              <Button className="flex items-center bg-[#F1FAFF] rounded-md px-4 py-[2px] h-[32px]">
                <span className="mr-1 text-[#009EF7] text-xs">
                  <AiTwotoneFilter />
                </span>
                <span className="text-[10px] font-['Roboto'] font-bold text-[#009EF7]">
                  Filter
                </span>
              </Button>
              <Button className="flex items-center bg-[#F1FAFF] rounded-md px-4 py-[2px] h-[32px]">
                <span className="mr-1 text-[#009EF7] text-xs">
                  <BiExport />
                </span>
                <span className="text-[10px] font-['Roboto'] font-bold text-[#009EF7]">
                  Export
                </span>
              </Button>
              <Button className="flex items-center bg-[#009EF7] rounded-md px-4 py-[2px] h-[34px]">
                <span className="mr-1 text-white text-base">
                  <IoMdAdd />
                </span>
                <span className="text-[11px] font-['Roboto'] font-bold text-white">
                  Add Subscription
                </span>
              </Button>
            </div>
          </div>
          <TableContainer component={Paper} sx={{ maxHeight: "390px" }}>
            <Table
              aria-label="simple table"
              stickyHeader
              sx={{ width: "max-content" }}
              padding="normal"
              size="small"
            >
              <TableHead>
                <TableRow>{theadText()}</TableRow>
              </TableHead>
              <TableBody>
                {customer.map((row, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      align="center"
                      sx={{
                        fontFamily: "Roboto",
                        fontWeight: "400",
                        fontSize: "10px",
                        color: "#414141",
                        paddingTop: "3px",
                        paddingBottom: "0px",
                        paddingLeft: "10px",
                      }}
                      component="th"
                      scope="row"
                    >
                      {index + 1}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={{
                        fontFamily: "Roboto",
                        fontWeight: "400",
                        fontSize: "10px",
                        color: "#414141",
                        paddingTop: "3px",
                        paddingBottom: "0px",
                        paddingLeft: "10px",
                      }}
                      component="th"
                      scope="row"
                    >
                      <span className="bg-[#009EF7] rounded-md text-white py-[8px] px-[8px] inline-block">
                        <BsThreeDotsVertical />
                      </span>
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        fontFamily: "Roboto",
                        fontWeight: "400",
                        fontSize: "10px",
                        color: "#414141",
                        paddingTop: "3px",
                        paddingBottom: "0px",
                        paddingLeft: "10px",
                      }}
                      component="th"
                      scope="row"
                    >
                      {row.cid}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        fontFamily: "Roboto",
                        fontWeight: "400",
                        fontSize: "10px",
                        color: "#414141",
                        paddingTop: "3px",
                        paddingBottom: "0px",
                        paddingLeft: "10px",
                      }}
                    >
                      {row.sid}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        fontFamily: "Roboto",
                        fontWeight: "400",
                        fontSize: "10px",
                        color: "#414141",
                        paddingTop: "3px",
                        paddingBottom: "0px",
                        paddingLeft: "10px",
                      }}
                    >
                      {row.namaPelanggan}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        fontFamily: "Roboto",
                        fontWeight: "400",
                        fontSize: "10px",
                        color: "#414141",
                        paddingTop: "3px",
                        paddingBottom: "0px",
                        paddingLeft: "10px",
                      }}
                    >
                      {row.koordinat}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        fontFamily: "Roboto",
                        fontWeight: "400",
                        fontSize: "10px",
                        color: "#414141",
                        paddingTop: "3px",
                        paddingBottom: "0px",
                        paddingLeft: "10px",
                      }}
                    >
                      {row.area}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        fontFamily: "Roboto",
                        fontWeight: "400",
                        fontSize: "10px",
                        color: "#414141",
                        paddingTop: "3px",
                        paddingBottom: "0px",
                        paddingLeft: "10px",
                      }}
                    >
                      {row.sales}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        fontFamily: "Roboto",
                        fontWeight: "400",
                        fontSize: "10px",
                        color: "#414141",
                        paddingTop: "3px",
                        paddingBottom: "0px",
                        paddingLeft: "10px",
                      }}
                    >
                      {row.product}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        fontFamily: "Roboto",
                        fontWeight: "400",
                        fontSize: "10px",
                        color: "#414141",
                        paddingTop: "3px",
                        paddingBottom: "0px",
                        paddingLeft: "10px",
                      }}
                    >
                      {row.bandwidth}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        fontFamily: "Roboto",
                        fontWeight: "400",
                        fontSize: "10px",
                        color: "#414141",
                        paddingTop: "3px",
                        paddingBottom: "0px",
                        paddingLeft: "10px",
                      }}
                    >
                      {row.validationStatus}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        fontFamily: "Roboto",
                        fontWeight: "400",
                        fontSize: "10px",
                        color: "#414141",
                        paddingTop: "3px",
                        paddingBottom: "0px",
                        paddingLeft: "10px",
                      }}
                    >
                      {row.status}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        fontFamily: "Roboto",
                        fontWeight: "400",
                        fontSize: "10px",
                        color: "#414141",
                        paddingTop: "3px",
                        paddingBottom: "0px",
                        paddingLeft: "10px",
                      }}
                    >
                      {row.kabupaten}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        fontFamily: "Roboto",
                        fontWeight: "400",
                        fontSize: "10px",
                        color: "#414141",
                        paddingTop: "3px",
                        paddingBottom: "0px",
                        paddingLeft: "10px",
                      }}
                    >
                      {row.visit}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        fontFamily: "Roboto",
                        fontWeight: "400",
                        fontSize: "10px",
                        color: "#414141",
                        paddingTop: "3px",
                        paddingBottom: "0px",
                        paddingLeft: "10px",
                      }}
                    >
                      {row.service}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        fontFamily: "Roboto",
                        fontWeight: "400",
                        fontSize: "10px",
                        color: "#414141",
                        paddingTop: "3px",
                        paddingBottom: "0px",
                        paddingLeft: "10px",
                      }}
                    >
                      {row.alamat}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        fontFamily: "Roboto",
                        fontWeight: "400",
                        fontSize: "10px",
                        color: "#414141",
                        paddingTop: "3px",
                        paddingBottom: "0px",
                        paddingLeft: "10px",
                      }}
                    >
                      {row.lastmile1}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        fontFamily: "Roboto",
                        fontWeight: "400",
                        fontSize: "10px",
                        color: "#414141",
                        paddingTop: "3px",
                        paddingBottom: "0px",
                        paddingLeft: "10px",
                      }}
                    >
                      {row.lastmile2}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        fontFamily: "Roboto",
                        fontWeight: "400",
                        fontSize: "10px",
                        color: "#414141",
                        paddingTop: "3px",
                        paddingBottom: "0px",
                        paddingLeft: "10px",
                      }}
                    >
                      {row.aplikasi}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        fontFamily: "Roboto",
                        fontWeight: "400",
                        fontSize: "10px",
                        color: "#414141",
                        paddingTop: "3px",
                        paddingBottom: "0px",
                        paddingLeft: "10px",
                      }}
                    >
                      {row.bts1}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        fontFamily: "Roboto",
                        fontWeight: "400",
                        fontSize: "10px",
                        color: "#414141",
                        paddingTop: "3px",
                        paddingBottom: "0px",
                        paddingLeft: "10px",
                      }}
                    >
                      {row.bts2}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        fontFamily: "Roboto",
                        fontWeight: "400",
                        fontSize: "10px",
                        color: "#414141",
                        paddingTop: "3px",
                        paddingBottom: "0px",
                        paddingLeft: "10px",
                      }}
                    >
                      {row.ipAddress}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        fontFamily: "Roboto",
                        fontWeight: "400",
                        fontSize: "10px",
                        color: "#414141",
                        paddingTop: "3px",
                        paddingBottom: "0px",
                        paddingLeft: "10px",
                      }}
                    >
                      {row.vendor}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        fontFamily: "Roboto",
                        fontWeight: "400",
                        fontSize: "10px",
                        color: "#414141",
                        paddingTop: "3px",
                        paddingBottom: "0px",
                        paddingLeft: "10px",
                      }}
                    >
                      {row.noteTeknis}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        fontFamily: "Roboto",
                        fontWeight: "400",
                        fontSize: "10px",
                        color: "#414141",
                        paddingTop: "3px",
                        paddingBottom: "0px",
                        paddingLeft: "10px",
                      }}
                    >
                      {row.instalationDate}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        fontFamily: "Roboto",
                        fontWeight: "400",
                        fontSize: "10px",
                        color: "#414141",
                        paddingTop: "3px",
                        paddingBottom: "0px",
                        paddingLeft: "10px",
                      }}
                    >
                      {row.tanggalBaa}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        fontFamily: "Roboto",
                        fontWeight: "400",
                        fontSize: "10px",
                        color: "#414141",
                        paddingTop: "3px",
                        paddingBottom: "0px",
                        paddingLeft: "10px",
                      }}
                    >
                      {row.hotspot}
                    </TableCell>
                    <TableCell
                      align="left"
                      sx={{
                        fontFamily: "Roboto",
                        fontWeight: "400",
                        fontSize: "10px",
                        color: "#414141",
                        paddingTop: "3px",
                        paddingBottom: "0px",
                        paddingLeft: "10px",
                      }}
                    >
                      {row.mcAddress}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <p className="font-['Roboto'] text-[11px] text-[#979797] font-normal mt-2 ml-3">
            Showing 1 to 10 of 1,666 entires
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
