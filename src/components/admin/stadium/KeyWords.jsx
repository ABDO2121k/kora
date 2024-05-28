import Chip from "@mui/material/Chip";
import { Autocomplete, TextField } from "@mui/material";
import { getAmenityIcon } from "./KeyWordsIcons";
import toast from "react-hot-toast";

function KeyWords({ keywords, handelSetKeywords }) {
  const amenities = [
    "Mosque",
    "Restroom",
    "Restaurant",
    "Parking facilities",
    "Concession stands",
    "VIP suites",
    "First aid stations",
    "Wi-Fi access",
    "ATM machines",
    "Merchandise shops",
    "Elevators and escalators",
    "Wheelchair accessibility",
    "Security checkpoints",
    "Scoreboard and video screens",
    "Meeting and event spaces",
    "Children's play area",
    "Outdoor seating area",
    "Lounge and bar areas",
    "Locker rental services",
    "Bicycle racks",
    "Public transportation access",
    "Smoking areas",
    "Lost and found services",
  ];

  const handleDelete = (index) => {
    const updatedKeywords = [...keywords];
    updatedKeywords.splice(index, 1);
    handelSetKeywords(updatedKeywords);
  };

  const handleAddKeyword = (newKeyword) => {
    if (!keywords.includes(newKeyword)) {
      handelSetKeywords([...keywords, newKeyword]);
      toast.success("Keyword added successfully");
    } else {
      toast.error("This keyword already exists");
    }
  };

  return (
    <div>
      <Autocomplete
        freeSolo
        id="stadium-amenities"
        options={amenities}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Stadium Amenities"
            variant="outlined"
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleAddKeyword(e.target.value);
                e.target.value = "";
              }
            }}
          />
        )}
      />
      {keywords.length > 0 && (
        <div className="p-5 shadow-md rounded-md mt-3">
          {keywords.map((keyword, index) => (
            <Chip
              key={index}
              icon={getAmenityIcon(keyword)}
              label={`${keyword}`}
              className="bg-red-400"
              sx={{ padding: "5px", margin: "5px" }}
              onDelete={() => handleDelete(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default KeyWords;
