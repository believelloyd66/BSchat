// ==================== DATA ====================
const contacts = [
  { id: 1, name: "Adaobi Okeke", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Adaobi", online: true, lastSeen: "online", unread: 3 },
  { id: 2, name: "Chinedu Eze", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Chinedu", online: false, lastSeen: "last seen today at 14:22", unread: 0 },
  { id: 3, name: "Fatima Bello", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fatima", online: true, lastSeen: "online", unread: 1 },
  { id: 4, name: "Tunde Bakare", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tunde", online: false, lastSeen: "last seen yesterday", unread: 0 },
  { id: 5, name: "Ngozi Umeh", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ngozi", online: true, lastSeen: "online", unread: 7 },
  { id: 6, name: "Ibrahim Musa", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ibrahim", online: false, lastSeen: "last seen 2 hours ago", unread: 0 },
  { id: 7, name: "Amaka Nwosu", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amaka", online: false, lastSeen: "last seen today at 09:15", unread: 2 },
  { id: 8, name: "Bschat Support", avatar: "https://api.dicebear.com/7.x/bottts/svg?seed=Support", online: true, lastSeen: "online", unread: 0 },
];

const conversations = {
  1: [
    { from: "them", text: "Hey! Are we still meeting later?", time: "09:12" },
    { from: "me", text: "Yes, 4pm at the usual place 👍", time: "09:15" },
    { from: "them", text: "Perfect. I'll bring the documents.", time: "09:16" },
    { from: "them", text: "Also, did you check the payment?", time: "09:17" },
  ],
  2: [
    { from: "me", text: "The project files are ready", time: "13:40" },
    { from: "them", text: "Great, sending review notes now", time: "14:05" },
  ],
  3: [
    { from: "them", text: "Happy birthday!! 🎉🎂", time: "08:01" },
    { from: "me", text: "Thank you so much Fatima ❤️", time: "08:30" },
  ],
  4: [
    { from: "them", text: "Call me when you're free", time: "Yesterday" },
  ],
  5: [
    { from: "them", text: "The invoice has been sent", time: "11:22" },
    { from: "them", text: "Please confirm once received", time: "11:23" },
    { from: "them", text: "Also attached the receipt", time: "11:24" },
  ],
  6: [
    { from: "me", text: "See you at the gym?", time: "18:00" },
  ],
  7: [
    { from: "them", text: "Can you send the address again?", time: "10:11" },
    { from: "me", text: "Sure, 14 Admiralty Way, Lekki", time: "10:15" },
  ],
  8: [
    { from: "them", text: "Welcome to Bschat Premium! 🚀 Your banking features are now active.", time: "Today" },
  ],
};

const statusUpdates = [
  { id: 1, name: "Adaobi Okeke", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Adaobi", time: "12m ago", viewed: false },
  { id: 2, name: "Fatima Bello", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fatima", time: "45m ago", viewed: false },
  { id: 3, name: "Ngozi Umeh", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ngozi", time: "2h ago", viewed: true },
  { id: 4, name: "Chinedu Eze", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Chinedu", time: "5h ago", viewed: true },
];

const callHistory = [
  { id: 1, name: "Adaobi Okeke", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Adaobi", type: "incoming", time: "Today, 10:42", duration: "4:21", missed: false },
  { id: 2, name: "Tunde Bakare", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tunde", type: "outgoing", time: "Today, 09:15", duration: "12:08", missed: false },
  { id: 3, name: "Ngozi Umeh", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ngozi", type: "missed", time: "Yesterday, 21:30", duration: "", missed: true },
  { id: 4, name: "Fatima Bello", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Fatima", type: "incoming", time: "Yesterday, 16:05", duration: "2:45", missed: false },
  { id: 5, name: "Ibrahim Musa", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ibrahim", type: "outgoing", time: "Mon, 14:20", duration: "8:12", missed: false },
];

const transactions = [
  { id: 1, title: "Transfer to Adaobi", amount: -25000, time: "Today, 09:18", type: "out" },
  { id: 2, title: "Salary Credit", amount: 450000, time: "Today, 08:00", type: "in" },
  { id: 3, title: "Airtime Purchase", amount: -2000, time: "Yesterday", type: "out" },
  { id: 4, title: "From Chinedu Eze", amount: 15000, time: "Yesterday", type: "in" },
  { id: 5, title: "Netflix Subscription", amount: -4500, time: "Oct 12", type: "out" },
];

// ==================== STATE ====================
let currentTab = "chats";
let currentChatId = null;
let previousScreen = "chats";
let balanceVisible = true;

// ==================== INIT ====================
document.addEventListener("DOMContentLoaded", () => {
  lucide.createIcons();
  renderChatList();
  renderStatusList();
  renderCallList();
  renderTransactions();
  updateClock();
  setInterval(updateClock, 1000);
  updateNavHighlight();
  
  // GSAP entrance
  gsap.from("#screen-chats", { opacity: 0, y: 20, duration: 0.5, ease: "power2.out" });
});

// ==================== CLOCK ====================
function updateClock() {
  const now = new Date();
  const timeStr = now.toLocaleTimeString("en-NG", { hour: "2-digit", minute: "2-digit", hour12: false });
  const clockEl = document.getElementById("clock");
  const clockLand = document.getElementById("clock-landscape");
  if (clockEl) clockEl.textContent = timeStr;
  if (clockLand) clockLand.textContent = timeStr;
}

// ==================== RENDER LISTS ====================
function renderChatList() {
  const list = document.getElementById("chat-list");
  const landList = document.getElementById("landscape-chat-list");
  const html = contacts.map(c => `
    <div class="flex items-center gap-3 px-4 py-3 hover:bg-slate-800/50 active:bg-slate-800 cursor-pointer transition" onclick="openChat(${c.id})">
      <div class="relative flex-shrink-0">
        <img src="${c.avatar}" class="w-12 h-12 rounded-full object-cover" alt="${c.name}" />
        ${c.online ? '<div class="online-dot"></div>' : ''}
      </div>
      <div class="flex-1 min-w-0">
        <div class="flex justify-between items-baseline">
          <h3 class="font-semibold text-[15px] truncate">${c.name}</h3>
          <span class="text-[11px] text-slate-500 flex-shrink-0 ml-2">${getLastMsgTime(c.id)}</span>
        </div>
        <div class="flex justify-between items-center mt-0.5">
          <p class="text-sm text-slate-400 truncate">${getLastMsg(c.id)}</p>
          ${c.unread > 0 ? `<span class="badge-unread ml-2">${c.unread}</span>` : ''}
        </div>
      </div>
    </div>
  `).join("");
  
  if (list) list.innerHTML = html;
  if (landList) landList.innerHTML = html;
  lucide.createIcons();
}

function getLastMsg(id) {
  const msgs = conversations[id] || [];
  if (!msgs.length) return "No messages yet";
  const last = msgs[msgs.length - 1];
  return (last.from === "me" ? "You: " : "") + last.text;
}

function getLastMsgTime(id) {
  const msgs = conversations[id] || [];
  if (!msgs.length) return "";
  return msgs[msgs.length - 1].time;
}

function renderStatusList() {
  const list = document.getElementById("status-list");
  if (!list) return;
  list.innerHTML = statusUpdates.map(s => `
    <div class="flex items-center gap-4 cursor-pointer active:opacity-80" onclick="viewStatus(${s.id})">
      <div class="status-ring ${s.viewed ? 'viewed' : ''}">
        <img src="${s.avatar}" class="w-12 h-12 rounded-full border-2 border-slate-900" alt="${s.name}" />
      </div>
      <div>
        <p class="font-medium">${s.name}</p>
        <p class="text-sm text-slate-400">${s.time}</p>
      </div>
    </div>
  `).join("");
}

function renderCallList() {
  const list = document.getElementById("call-list");
  if (!list) return;
  list.innerHTML = callHistory.map(c => `
    <div class="flex items-center gap-3 px-4 py-3 hover:bg-slate-800/40 cursor-pointer" onclick="callContact('${c.name}')">
      <img src="${c.avatar}" class="w-12 h-12 rounded-full" alt="${c.name}" />
      <div class="flex-1 min-w-0">
        <p class="font-medium ${c.missed ? 'text-red-400' : ''}">${c.name}</p>
        <div class="flex items-center gap-1 text-sm text-slate-400">
          <i data-lucide="${c.type === 'incoming' ? 'phone-incoming' : c.type === 'outgoing' ? 'phone-outgoing' : 'phone-missed'}" class="w-3.5 h-3.5 ${c.missed ? 'text-red-400' : ''}"></i>
          <span>${c.time}${c.duration ? ' · ' + c.duration : ''}</span>
        </div>
      </div>
      <button class="btn btn-ghost btn-circle btn-sm" onclick="event.stopPropagation(); startCall('voice')">
        <i data-lucide="phone" class="w-5 h-5 text-blue-400"></i>
      </button>
    </div>
  `).join("");
  lucide.createIcons();
}

function renderTransactions() {
  const list = document.getElementById("transactions");
  if (!list) return;
  list.innerHTML = transactions.map(t => `
    <div class="flex items-center gap-3 p-3 rounded-xl bg-slate-800/40">
      <div class="w-10 h-10 rounded-full ${t.type === 'in' ? 'bg-emerald-500/20' : 'bg-red-500/20'} flex items-center justify-center">
        <i data-lucide="${t.type === 'in' ? 'arrow-down-left' : 'arrow-up-right'}" class="w-5 h-5 ${t.type === 'in' ? 'text-emerald-400' : 'text-red-400'}"></i>
      </div>
      <div class="flex-1 min-w-0">
        <p class="font-medium text-sm truncate">${t.title}</p>
        <p class="text-xs text-slate-500">${t.time}</p>
      </div>
      <p class="font-semibold text-sm ${t.type === 'in' ? 'text-emerald-400' : 'text-slate-200'}">
        ${t.type === 'in' ? '+' : ''}₦${Math.abs(t.amount).toLocaleString()}
      </p>
    </div>
  `).join("");
  lucide.createIcons();
}

// ==================== NAVIGATION ====================
function switchTab(tab) {
  currentTab = tab;
  previousScreen = tab;
  
  // Hide all main screens
  ["chats", "status", "calls", "banking", "profile", "chat"].forEach(s => {
    const el = document.getElementById("screen-" + s);
    if (el) {
      el.classList.remove("active");
    }
  });
  
  const target = document.getElementById("screen-" + tab);
  if (target) {
    target.classList.add("active");
    gsap.fromTo(target, { opacity: 0.7, x: 15 }, { opacity: 1, x: 0, duration: 0.3, ease: "power2.out" });
  }
  
  updateNavHighlight();
  lucide.createIcons();
}

function updateNavHighlight() {
  document.querySelectorAll(".nav-btn, .landscape-nav button").forEach(btn => {
    const t = btn.dataset.tab || btn.dataset.nav;
    if (t === currentTab) {
      btn.classList.add("text-blue-400");
      btn.classList.remove("text-slate-400");
    } else {
      btn.classList.remove("text-blue-400");
      btn.classList.add("text-slate-400");
    }
  });
}

function showScreen(name) {
  previousScreen = currentTab;
  ["chats", "status", "calls", "banking", "profile", "chat"].forEach(s => {
    const el = document.getElementById("screen-" + s);
    if (el) el.classList.remove("active");
  });
  const target = document.getElementById("screen-" + name);
  if (target) {
    target.classList.add("active");
    gsap.fromTo(target, { x: 40, opacity: 0.5 }, { x: 0, opacity: 1, duration: 0.35, ease: "power2.out" });
  }
  lucide.createIcons();
}

function goBack() {
  const chatScreen = document.getElementById("screen-chat");
  if (chatScreen && chatScreen.classList.contains("active")) {
    chatScreen.classList.remove("active");
    const prev = document.getElementById("screen-" + (previousScreen || "chats"));
    if (prev) {
      prev.classList.add("active");
      gsap.fromTo(prev, { x: -30, opacity: 0.6 }, { x: 0, opacity: 1, duration: 0.3 });
    }
    currentChatId = null;
  } else {
    switchTab(previousScreen || "chats");
  }
}

// ==================== CHAT ====================
function openChat(id) {
  currentChatId = id;
  const contact = contacts.find(c => c.id === id);
  if (!contact) return;
  
  // Clear unread
  contact.unread = 0;
  renderChatList();
  
  document.getElementById("chat-name").textContent = contact.name;
  document.getElementById("chat-avatar").src = contact.avatar;
  document.getElementById("chat-status").textContent = contact.lastSeen;
  const onlineDot = document.getElementById("chat-online");
  if (contact.online) onlineDot.classList.remove("hidden");
  else onlineDot.classList.add("hidden");
  
  renderMessages(id);
  
  // Slide transition
  const chats = document.getElementById("screen-chats");
  const chat = document.getElementById("screen-chat");
  if (chats) chats.classList.remove("active");
  if (chat) {
    chat.classList.add("active");
    gsap.fromTo(chat, { x: "100%" }, { x: 0, duration: 0.35, ease: "power2.out" });
  }
  
  // Focus input on mobile
  setTimeout(() => {
    const input = document.getElementById("msg-input");
    if (input && window.innerWidth < 500) input.focus();
  }, 400);
  
  lucide.createIcons();
}

function renderMessages(id) {
  const container = document.getElementById("messages");
  const msgs = conversations[id] || [];
  container.innerHTML = msgs.map(m => `
    <div class="flex ${m.from === 'me' ? 'justify-end' : 'justify-start'}">
      <div class="msg-bubble ${m.from === 'me' ? 'msg-out' : 'msg-in'}">
        <div>${escapeHtml(m.text)}</div>
        <div class="msg-time">${m.time}</div>
      </div>
    </div>
  `).join("");
  container.scrollTop = container.scrollHeight;
}

function sendMessage() {
  const input = document.getElementById("msg-input");
  const text = input.value.trim();
  if (!text || !currentChatId) return;
  
  if (!conversations[currentChatId]) conversations[currentChatId] = [];
  
  const now = new Date();
  const time = now.toLocaleTimeString("en-NG", { hour: "2-digit", minute: "2-digit", hour12: false });
  
  conversations[currentChatId].push({ from: "me", text, time });
  input.value = "";
  renderMessages(currentChatId);
  renderChatList();
  
  // Simulated reply
  setTimeout(() => {
    const replies = [
      "Got it 👍",
      "Sounds good!",
      "I'll check and get back to you",
      "Thanks for the update",
      "Okay, noted.",
      "Perfect ✨",
      "On it!",
      "Haha okay 😄",
      "Sure thing",
      "Let me confirm"
    ];
    const reply = replies[Math.floor(Math.random() * replies.length)];
    const replyTime = new Date().toLocaleTimeString("en-NG", { hour: "2-digit", minute: "2-digit", hour12: false });
    conversations[currentChatId].push({ from: "them", text: reply, time: replyTime });
    renderMessages(currentChatId);
    renderChatList();
    
    // Subtle notification feel
    showToast("New reply");
  }, 1200 + Math.random() * 1500);
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

// ==================== ACTIONS ====================
function startCall(type) {
  showToast(type === "video" ? "Starting video call..." : "Calling...");
  // Simulate
  setTimeout(() => showToast("Call ended (demo)"), 2500);
}

function callContact(name) {
  showToast(`Calling ${name}...`);
}

function viewStatus(id) {
  const s = statusUpdates.find(x => x.id === id);
  if (s) {
    s.viewed = true;
    renderStatusList();
    showToast(`Viewing ${s.name}'s status`);
  }
}

function createStatus() {
  showToast("Camera opening... (demo)");
}

function attachFile() {
  showToast("Attachment options (demo)");
}

function toggleEmoji() {
  showToast("Emoji picker (demo)");
}

function showContactInfo() {
  showToast("Contact info (demo)");
}

function bankAction(action) {
  const labels = { send: "Send Money", request: "Request Money", pay: "Scan to Pay", more: "More options" };
  showToast(labels[action] || action);
}

function toggleBalance() {
  balanceVisible = !balanceVisible;
  const el = document.getElementById("balance");
  if (el) {
    el.textContent = balanceVisible ? "₦1,248,650.00" : "••••••••";
  }
}

function viewAllTransactions() {
  showToast("All transactions (demo)");
}

function showNotifications() {
  showToast("No new notifications");
}

function editProfile() {
  showToast("Edit profile (demo)");
}

function toggleTheme() {
  showToast("Theme toggled (demo)");
}

// ==================== TOAST ====================
function showToast(msg) {
  const toast = document.getElementById("toast");
  toast.textContent = msg;
  toast.style.opacity = "1";
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.style.opacity = "0";
  }, 2200);
}

// ==================== ORIENTATION ====================
window.addEventListener("orientationchange", () => {
  setTimeout(() => {
    lucide.createIcons();
    renderChatList();
  }, 300);
});

// Prevent zoom on double tap etc.
document.addEventListener("gesturestart", e => e.preventDefault());
