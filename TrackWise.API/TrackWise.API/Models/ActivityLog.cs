

namespace TrackWise.API.Models
{
    public class ActivityLog
    {
        public int LogId { get; set; }
        public string Action { get; set; } = string.Empty;
        public int PerformedBy { get; set; }
        public DateTime PerformedAt { get; set; }
    }
}