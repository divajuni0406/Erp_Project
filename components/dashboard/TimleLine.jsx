import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";

import React from "react";

const TimleLine = () => {
  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0,
          marginLeft: "-15px",
          paddingLeft: 0,
        },
      }}
    >
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ fontFamily: "Roboto", fontWeight: "600", fontSize: "12px" }}
        >
          08:42
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" sx={{ borderColor: "#663259" }} />
          <TimelineConnector sx={{ marginTop: "-7px", height: "1px" }} />
        </TimelineSeparator>
        <TimelineContent
          sx={{ fontFamily: "Roboto", fontWeight: "400", fontSize: "12px" }}
        >
          Vitae placerat egestas felis risus leo nec lorem nisi.
        </TimelineContent>
      </TimelineItem>
      <TimelineItem sx={{ marginTop: "-5px" }}>
        <TimelineOppositeContent
          sx={{ fontFamily: "Roboto", fontWeight: "600", fontSize: "12px" }}
        >
          08:42
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" sx={{ borderColor: "#1BC5BD" }} />
          <TimelineConnector sx={{ marginTop: "-7px", height: "1px" }} />
        </TimelineSeparator>
        <TimelineContent
          sx={{ fontFamily: "Roboto", fontWeight: "400", fontSize: "12px" }}
        >
          Vitae placerat egestas felis risus leo nec lorem nisi.
        </TimelineContent>
      </TimelineItem>
      <TimelineItem sx={{ marginTop: "-5px" }}>
        <TimelineOppositeContent
          sx={{ fontFamily: "Roboto", fontWeight: "600", fontSize: "12px" }}
        >
          08:42
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" sx={{ borderColor: "#F64E60" }} />
          <TimelineConnector sx={{ marginTop: "-7px", height: "1px" }} />
        </TimelineSeparator>
        <TimelineContent
          sx={{ fontFamily: "Roboto", fontWeight: "400", fontSize: "12px" }}
        >
          Vitae placerat egestas felis risus leo nec lorem nisi.
        </TimelineContent>
      </TimelineItem>
      <TimelineItem sx={{ marginTop: "-5px" }}>
        <TimelineOppositeContent
          sx={{ fontFamily: "Roboto", fontWeight: "600", fontSize: "12px" }}
        >
          08:42
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" sx={{ borderColor: "#4FA6FF" }} />
          <TimelineConnector sx={{ marginTop: "-7px", height: "1px" }} />
        </TimelineSeparator>
        <TimelineContent
          sx={{ fontFamily: "Roboto", fontWeight: "400", fontSize: "12px" }}
        >
          Vitae placerat egestas felis risus leo nec lorem nisi.
        </TimelineContent>
      </TimelineItem>
      <TimelineItem sx={{ marginTop: "-5px" }}>
        <TimelineOppositeContent
          sx={{ fontFamily: "Roboto", fontWeight: "600", fontSize: "12px" }}
        >
          08:42
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" sx={{ borderColor: "#EF6327" }} />
          <TimelineConnector sx={{ marginTop: "-7px", height: "1px" }} />
        </TimelineSeparator>
        <TimelineContent
          sx={{ fontFamily: "Roboto", fontWeight: "400", fontSize: "12px" }}
        >
          Vitae placerat egestas felis risus leo nec lorem nisi.
        </TimelineContent>
      </TimelineItem>
      <TimelineItem sx={{ marginTop: "-5px" }}>
        <TimelineOppositeContent
          sx={{ fontFamily: "Roboto", fontWeight: "600", fontSize: "12px" }}
        >
          08:42
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot variant="outlined" sx={{ borderColor: "#8950FC" }} />
        </TimelineSeparator>
        <TimelineContent
          sx={{ fontFamily: "Roboto", fontWeight: "400", fontSize: "12px" }}
        >
          Vitae placerat egestas felis risus leo nec lorem nisi.
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default TimleLine;
