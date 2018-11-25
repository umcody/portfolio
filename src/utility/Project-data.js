import osp from "../assets/img/osp.jpg";
import reliance from "../assets/img/reliance.jpg";
import remita from "../assets/img/remita.jpg";
import stabintel from "../assets/img/stabintel.jpg";

const projectData = [
  {
    id: 1,
    name: "Remita",
    category: "Web design",
    description:
      "Remita is an all-in-one mobile app that allows you switch between your personal and corporate profiles on your device so you authorise payments quickly.",
    image: remita,
    imageAlt: "remita",
    url: "https://www.remita.net/mobileapp/",
    altUrl: "",
    right: false
  },
  {
    id: 2,
    name: "Reliance",
    category: "Web design",
    description:
      "Reliance is a home care agency that shares a passion for meeting the physical, social, emotional and health care needs of consumers and their family.",
    image: reliance,
    imageAlt: "reliance",
    url: "http://rfcservice.com",
    altUrl: "",
    right: true
  },
  {
    id: 3,
    name: "OSP DPR",
    category: "Mobile app",
    description:
      "The OSP (Offshore Safety Permit) Project was introduced by the DPR for Safety and Personnel Accountability of all offshore workers within the Nigerian Oil and Gas Industry.",
    image: osp,
    imageAlt: "osp",
    url: "https://play.google.com/store/apps/details?id=com.wael.dprosp.app",
    altUrl: "https://itunes.apple.com/us/app/offshore-safety-permit/id1441544052?mt=8",
    right: false
  },
  {
    id: 4,
    name: "Stabintel",
    category: "Web design",
    description:
      "A technology company that specializes in developing top tier software engineering solutions designed to elevate your business",
    image: stabintel,
    imageAlt: "stabintel",
    url: "http://stabintel.com.s3-website-us-east-1.amazonaws.com/",
    altUrl: "",
    right: true
  }
];

export default projectData;
